const fs = require('fs');

const files = ['index.html', 'about.html', 'ai.html', 'docs.html', 'manifesto.html'];

const navHTML = `<nav id="navbar" class="fixed top-0 w-full h-[44px] z-[100] transition-colors duration-300 _NAV_TRANSPARENT_CLASS_">
<div class="nav-inner flex justify-between items-center px-4 w-full max-w-[1024px] mx-auto h-full">
<a href="index.html" class="nav-link flex items-center justify-center">
  <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z" fill="currentColor"/></svg>
</a>
<div id="mobileMenu" class="hidden absolute top-[44px] left-0 w-full bg-[#000000]/95 backdrop-blur-md flex-col p-4 gap-4 md:static md:w-auto md:bg-transparent md:p-0 md:flex md:flex-row md:gap-8 items-center flex-1 justify-center">
<a class="nav-link" href="index.html">Overview</a>
<a class="nav-link" href="about.html">About</a>
<a class="nav-link" href="ai.html">AI</a>
<a class="nav-link" href="manifesto.html">Dilemma</a>
<a class="nav-link" href="docs.html">Docs</a>
</div>
<div class="flex items-center gap-4">
<a href="#" class="nav-link flex items-center justify-center"><svg height="44" viewBox="0 0 15 44" width="15" xmlns="http://www.w3.org/2000/svg"><path d="m14.298 27.202-3.87-3.87c.699-.887 1.12-1.996 1.12-3.203 0-2.871-2.336-5.207-5.207-5.207-2.871 0-5.207 2.336-5.207 5.207 0 2.871 2.336 5.207 5.207 5.207 1.124 0 2.159-.383 3.011-1.018l3.896 3.896c.123.123.284.185.446.185s.323-.062.446-.185c.246-.247.246-.646-.042-.934zm-7.957-3.149c-2.154 0-3.908-1.753-3.908-3.923 0-2.169 1.754-3.923 3.908-3.923 2.169 0 3.923 1.754 3.923 3.923 0 2.169-1.754 3.923-3.923 3.923z" fill="currentColor"/></svg></a>
<a href="#" class="nav-link flex items-center justify-center"><svg height="44" viewBox="0 0 13 44" width="13" xmlns="http://www.w3.org/2000/svg"><path d="m11.233 17.587h-1.428v-1.786c0-1.849-1.505-3.354-3.354-3.354-1.848 0-3.354 1.505-3.354 3.354v1.786h-1.427c-.896 0-1.625.729-1.625 1.625v7.625c0 .895.729 1.625 1.625 1.625h9.562c.895 0 1.625-.729 1.625-1.625v-7.625c0-.896-.729-1.625-1.625-1.625zm-7.078-1.786c0-1.22 1.055-2.25 2.296-2.25s2.296 1.029 2.296 2.25v1.786h-4.592zm7.551 9.411c0 .312-.256.568-.568.568h-9.562c-.312 0-.568-.256-.568-.568v-7.625c0-.311.256-.568.568-.568h9.562c.312 0 .568.257.568.568z" fill="currentColor"/></svg></a>
<button onclick="document.getElementById('mobileMenu').classList.toggle('hidden'); document.getElementById('mobileMenu').classList.toggle('flex')" class="md:hidden flex items-center nav-link">
  <span class="material-symbols-outlined">menu</span>
</button>
</div>
</div>
</nav>`;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const navStart = content.indexOf('<nav id="navbar"');
  if (navStart === -1) return;
  const navEnd = content.indexOf('</nav>', navStart) + 6;
  if (navEnd !== 5) {
    const isTransparent = file === 'index.html' ? 'nav-transparent-top' : '';
    const newNav = navHTML.replace('_NAV_TRANSPARENT_CLASS_', isTransparent);
    content = content.substring(0, navStart) + newNav + content.substring(navEnd);
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
});

let jsContent = fs.readFileSync('js/liquid-glass.js', 'utf8');
if (!jsContent.includes('nav.classList.add("scrolled")')) {
  jsContent = jsContent.replace('const currentScrollY = window.scrollY;', 
`const currentScrollY = window.scrollY;
    const nav = document.getElementById('navbar');
    if (nav) {
      if (currentScrollY > 10) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }`);
  fs.writeFileSync('js/liquid-glass.js', jsContent);
  console.log('Updated liquid-glass.js');
}
