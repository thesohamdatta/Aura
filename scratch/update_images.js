const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../website/index.html");
let content = fs.readFileSync(filePath, "utf-8");

const replacements = [
  // 1. A Closer Look (Cards 1 to 5)
  {
    target:
      'src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxeOX2uzmTWYIQ9qAOT5P7Z0q7xd3HGaQDnynTWF-V3AlQIF2omtr3JZStfd7xLuEV6OYzTuZXY-_-5RsKA9rsushl-hgNb_i_rtoDgUR8m8y20_DSydXxBzTbgfFEV3zQqm4P0D_s7Y4A_1IUZ5C-GI4aMjdSXcEYlqgvOLuP6zqSf2mNBas_683VjYRMtc-n3cUGUGaIQdhnMxDogE3-qVe81Oue7E2-4fd-5EQWIp_U23laxpXwD6VGcgzR2K4Goxq8wNi3w_U"',
    replacement: 'src="assets/png/three hero.png"',
  },
  {
    target:
      'src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzP5_uC7hhEYdgDqidUV_4PLnhdbqbtnS3ZY6LiMcxwTXd9nhJ2HIrZ5FGYrPg97U6k-RLaL-ktrUven83M9nTs4b2BU-AhNxYyUgHgLu54gMyoEaXL2CEwWWoW_wMq0g5ZSsSWI7xsGwQWFZe2lRN2JzGC7anhazd4-akKhX6HuG7y3OShRw40w4Nkvqs6DHOSo5PaFeQZ_NrG3xPa9yeh7sEbsSXd51hZCYD0H_YgMh8FpcFOfdXH_763hFm5bHIKlfESzz-4EQ"',
    replacement: 'src="assets/product/lens-macro.png"',
  },
  {
    target:
      'src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhJXhq5EvpGC9sa2hWbEide3OOrGSwUBAfgjNl9uuNATaGL9ioh_d2jDjpwU6MRDjEUVLSGGfNGiXS3tq1X13zKrvbZdFl-L1Vt7Whue742DTV-KXU8UvDJ9-THWP9wFWTeEys_Y-RuEUum8Qq7cpmijQVA1MoYDpYedYAKyPHMYt6GNCGRHc6RCzLiy1GEOgWWF5xcWocZGb7WOYKUdA_4SGAf_WbLi9PvLpEbn_4l8AJPBAX6bmSJ5u1OgJvLiD_-SI0VML3qP4"',
    replacement: 'src="assets/png/internal view.png"',
  },
  {
    target:
      'src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJMPGQhEjGW9WJbrPI-daYfrc295vuJ6sNLOFBiblTiAydKZwmNtYM865WGH2V-0L2lLqj88iLqayUUG3eGQfIbfk47_YMyD11wdZKa1L4CUdbtzAWCWOK7GNDx9JzkMQiPD7fNvXbRK39eGMGoVOGyTK0YPAQ7NXu36tc0tqOprXywxHKGGVQcs5qF0NcKUG9O26UwL1sEMSaUd6FC5D1ATZ9MSpEJI2-aJVHmwQnXYbKx-G1Ur6BaA_GiWxiwKdFrVk-7o_8RdE"',
    replacement: 'src="assets/product/usbc-macro.png"',
  },
  {
    target:
      'src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcIFCPSCSwvFZtMaqZdjrCmEg6pslTvhw0iJmENynFCz-of3Vl_TiPmMvHGeFSXA9V45IJmmTVoiCO-BBs0G5oVAC5HCvok6qwuEADqf_zk90ce5kkqXMPteBXd-dd8Pv2IibUntNmyqSl0yaktJH0wl6yCruQ6vrLSG5AN7qG-PxJp7tJ7oCNIGxlyAXZtKwTRqb6PnKlVXjyKVhLdvYH9O24yE-vAj2Lij-igucZOpYzZ1GkuGL7-MYLZXc4tmNGO17G9XqMio0"',
    replacement: 'src="assets/product/pendant-flatlay.png"',
  },
  // 2. Voice Capture (Mic macro detail)
  {
    target:
      'src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhbvPsXfGiHOc3vuEdkOzyhtqrp1Vw6p8pCi5u0AJr3lxCPHSZ1h_j5vu4V5I3KhLqqUAGz5f3tMIRBL_tyVHyQ8R868GuT22vtqSq1KK7tRO_k8qF0hpAK6wdDE4e25KCzpM0mhUmy59vfs9HqbyiqdmV-i3k7ei0OGzshgRqWHB9HArGHQguJxeb4jfFspVXWasmqn-EfPzLyPcC-fgetFZjnKWXrTA11qhacwf4PwQf9RpY8yhXqr6_bHDHUkzGU6hAGmlm60g"',
    replacement: 'src="assets/product/mic-macro.png"',
  },
  // 3. Visual Understanding (Aura camera view hero)
  {
    target:
      'src="https://lh3.googleusercontent.com/aida-public/AB6AXuCt15xv83IejmGIkFY7UtCbpcr2d1QC_Ta_RvYWm9P_3uV1W06RXsps7G33lPRQHEtZhqHyErN90Iq-pITN_OtlvA5aUGaIYERQMAcEZdvmSAnjRVHXADFaf_F2XX_i-XWWFKj_kNUMuJBMmaxUCjIRv5iYk1srkDNXC5uHhVxcz-G0TfsoIOiOvIQRPOaAk7ZNkQBFHYPUezFHGk6dgVWc-dAKBy_m2CnsO6G7Bee0srvdssieILyv7bkhr6NYjDMj9LEOHD7hJj4"',
    replacement: 'src="assets/hero/lifestyle-reading.png"',
  },
  // 4. Built to Disappear (Floating device annotation)
  {
    target:
      '<img alt="Aura device floating" class="w-full max-w-[800px] mx-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxeOX2uzmTWYIQ9qAOT5P7Z0q7xd3HGaQDnynTWF-V3AlQIF2omtr3JZStfd7xLuEV6OYzTuZXY-_-5RsKA9rsushl-hgNb_i_rtoDgUR8m8y20_DSydXxBzTbgfFEV3zQqm4P0D_s7Y4A_1IUZ5C-GI4aMjdSXcEYlqgvOLuP6zqSf2mNBas_683VjYRMtc-n3cUGUGaIQdhnMxDogE3-qVe81Oue7E2-4fd-5EQWIp_U23laxpXwD6VGcgzR2K4Goxq8wNi3w_U">',
    replacement:
      '<img alt="Aura device floating" class="w-full max-w-[800px] mx-auto" src="assets/png/pendant-front.png">',
  },
  // 5. The Third Device (Thesis page)
  {
    target:
      '<img alt="Aura core" class="relative z-10 w-64" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxeOX2uzmTWYIQ9qAOT5P7Z0q7xd3HGaQDnynTWF-V3AlQIF2omtr3JZStfd7xLuEV6OYzTuZXY-_-5RsKA9rsushl-hgNb_i_rtoDgUR8m8y20_DSydXxBzTbgfFEV3zQqm4P0D_s7Y4A_1IUZ5C-GI4aMjdSXcEYlqgvOLuP6zqSf2mNBas_683VjYRMtc-n3cUGUGaIQdhnMxDogE3-qVe81Oue7E2-4fd-5EQWIp_U23laxpXwD6VGcgzR2K4Goxq8wNi3w_U">',
    replacement:
      '<img alt="Aura core" class="relative z-10 w-64" src="assets/png/front and back.png">',
  },
  // 6. Everything on Your Phone (Companion app)
  {
    target:
      '<img alt="App UI screens" class="w-full max-w-[400px] drop-shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRkvbzD8nLO49CFPox8wkMhLr5lN8EuqfOD_oGt4wJ9MhVD8xJJyjONod9O6RZheOx8APf5SZCsC7XQlOZ0UxQcjf4e-oMkN2M5v5GN8ZmxKKOWxzN7vJpZwPiXUaAFUlFVaw55x00WK2-4c4XXNQ_26hwxsae4ubIK0M-vtxqWzoKV3IBBgewSykG0xtWI48avcHM3NLMenxFMa5pKgXtcZGhI-1xLLNc2I4L3zgD0eBvg6i9XI4buy-P83piASVovW0l10LzW2g">',
    replacement:
      '<img alt="App UI screens" class="w-full max-w-[400px]" src="assets/png/software.png">',
  },
  // 7. Technical Specifications (Specs section side-view, board, battery)
  {
    target:
      '<img alt="Aura side view" class="w-full max-w-[600px] translate-x-12" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxeOX2uzmTWYIQ9qAOT5P7Z0q7xd3HGaQDnynTWF-V3AlQIF2omtr3JZStfd7xLuEV6OYzTuZXY-_-5RsKA9rsushl-hgNb_i_rtoDgUR8m8y20_DSydXxBzTbgfFEV3zQqm4P0D_s7Y4A_1IUZ5C-GI4aMjdSXcEYlqgvOLuP6zqSf2mNBas_683VjYRMtc-n3cUGUGaIQdhnMxDogE3-qVe81Oue7E2-4fd-5EQWIp_U23laxpXwD6VGcgzR2K4Goxq8wNi3w_U">',
    replacement:
      '<img alt="Aura exploded view" class="w-full max-w-[600px] translate-x-12" src="assets/product/exploded-view.jpg">',
  },
  {
    target:
      '<img alt="Board schematics" class="w-full h-64 object-contain mb-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB47Q9IbXbfKFr9U_mlTKXAiywi7yHOzyOEzR0zHVxU3sbyxJZUSmhZRrEv477u-2GyhY0uezkQ4-Y1ENUi43Xeaign68yB3qOeO08oR-BKP5Va03Pw0xwsWIFWnmvgdP2psjfWrjkXPQ7-mGJGNGJBX8wyZdmD6hca_pHvDvOyv9XP2_87AfvFF96OgbXIO3oRmVyaezQd422VBooII1vyXRFtpB64aghYhP1x7vF5NVJWKeqlXc6GML-nTfA8zIxHNRw7JRonsiw">',
    replacement:
      '<img alt="Board schematics" class="w-full h-64 object-contain mb-8" src="assets/product/mcu-board.png">',
  },
  {
    target:
      '<img alt="Battery module" class="w-full h-64 object-contain mb-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgJ2NmZ5e7siDhzSWoykkpU0g9GUCq_edzjifcUSeerF3Xc1R3Zv8Re8QKCxf59F3IiC62ZTbeJBKNTuhbWgCP4a1H87uPNL9HtRgyojcu2vxYrTrBBLFqs34cyXH8k6Wx2DtWt_tmJ4qH31G1KI0aAWt0XKSorbB_4fovC2KrCct-uXrhQP8_jaWjivuQN-sn_K_-e08lMbBifaUZKmG1eRR_d_AKSdiXe07qgrc_8wUP2CxXuuGTSAPRztj-UdY3swovHSW17aM">',
    replacement:
      '<img alt="Battery module" class="w-full h-64 object-contain mb-8" src="assets/product/battery-render.png">',
  },
  // 8. Start Your Build Today (CTA footer visual)
  {
    target:
      '<img alt="Aura finale" class="w-full h-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxeOX2uzmTWYIQ9qAOT5P7Z0q7xd3HGaQDnynTWF-V3AlQIF2omtr3JZStfd7xLuEV6OYzTuZXY-_-5RsKA9rsushl-hgNb_i_rtoDgUR8m8y20_DSydXxBzTbgfFEV3zQqm4P0D_s7Y4A_1IUZ5C-GI4aMjdSXcEYlqgvOLuP6zqSf2mNBas_683VjYRMtc-n3cUGUGaIQdhnMxDogE3-qVe81Oue7E2-4fd-5EQWIp_U23laxpXwD6VGcgzR2K4Goxq8wNi3w_U">',
    replacement:
      '<img alt="Aura finale" class="w-full h-auto object-contain" src="assets/product/all-components.png">',
  },
];

let replacedCount = 0;
replacements.forEach((r) => {
  if (content.includes(r.target)) {
    content = content.replace(r.target, r.replacement);
    replacedCount++;
  } else {
    console.warn(
      `Target not found in index.html: ${r.target.substring(0, 80)}...`
    );
  }
});

if (replacedCount > 0) {
  fs.writeFileSync(filePath, content, "utf-8");
  console.log(
    `Successfully updated ${replacedCount} image sources in website/index.html.`
  );
} else {
  console.log("No image sources updated.");
}
