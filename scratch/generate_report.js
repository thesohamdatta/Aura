const fs = require("fs");
const path = require("path");
const os = require("os");
const { exec } = require("child_process");

const htmlContent = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Architecture review — thesohamdatta/aura</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script type="module">
      import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";
      mermaid.initialize({ startOnLoad: true, theme: "neutral", securityLevel: "loose" });
    </script>
    <style>
      .seam { stroke-dasharray: 4 4; }
      .leak { stroke: #dc2626; }
      .deep { background: linear-gradient(135deg, #0f172a, #1e293b); }
    </style>
  </head>
  <body class="bg-stone-50 text-slate-900 font-sans">
    <main class="max-w-5xl mx-auto px-6 py-12 space-y-12">
      <!-- HEADER -->
      <header class="border-b border-stone-200 pb-8">
        <h1 class="text-4xl font-serif font-bold tracking-tight text-slate-900 mb-2">Architecture Review</h1>
        <p class="text-stone-500 font-mono text-sm">Repository: thesohamdatta/aura &bull; Generated: ${new Date().toLocaleDateString()}</p>
        
        <!-- Legend -->
        <div class="mt-6 flex flex-wrap gap-6 items-center text-xs font-mono bg-white p-4 rounded-lg border border-stone-200 shadow-sm">
          <span class="flex items-center gap-2">
            <span class="w-4 h-4 bg-white border border-slate-300 rounded block"></span>
            <span>Module / Implementation</span>
          </span>
          <span class="flex items-center gap-2">
            <span class="w-6 border-t-2 border-dashed border-slate-400 block"></span>
            <span>Seam</span>
          </span>
          <span class="flex items-center gap-2">
            <span class="w-4 h-4 bg-slate-900 rounded block"></span>
            <span>Deep Module</span>
          </span>
          <span class="flex items-center gap-2">
            <span class="text-red-600 font-bold">&rarr;</span>
            <span class="text-red-600">Leakage</span>
          </span>
        </div>
      </header>

      <!-- CANDIDATES -->
      <section id="candidates" class="space-y-12">
        <!-- Candidate 1 -->
        <article class="bg-white border border-stone-200 rounded-xl p-8 shadow-sm space-y-6">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <h2 class="text-2xl font-serif font-semibold text-slate-900">1. Consolidate Navbar State and Scroll Transition</h2>
            <div class="flex gap-2">
              <span class="bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-full text-xs font-semibold">Strong</span>
              <span class="bg-slate-100 text-slate-700 border border-slate-200 px-2.5 py-0.5 rounded-full text-xs font-semibold">in-process</span>
            </div>
          </div>

          <div class="text-stone-500 font-mono text-xs space-y-1">
            <p><strong>Files:</strong></p>
            <ul class="list-disc pl-5">
              <li>website/index.html <span class="text-stone-400">(lines 866-911)</span></li>
              <li>website/about.html <span class="text-stone-400">(lines 19-21)</span></li>
              <li>website/ai.html <span class="text-stone-400">(lines 19-21)</span></li>
              <li>website/docs.html <span class="text-stone-400">(lines 20-22)</span></li>
              <li>website/manifesto.html <span class="text-stone-400">(lines 19-21)</span></li>
              <li>website/js/liquid-glass.js</li>
              <li>website/css/nav.css</li>
            </ul>
          </div>

          <!-- Side-by-side diagrams -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="border border-stone-200 rounded-lg p-4 bg-stone-50">
              <h3 class="text-xs uppercase tracking-wider text-stone-400 mb-3 font-semibold text-center">Before (Shallow & Scattered)</h3>
              <div class="bg-white p-2 rounded border border-stone-200">
                <pre class="mermaid text-center">
                  flowchart TD
                    subgraph HTML_Pages [HTML Pages]
                      index[index.html]
                      sub[subpages: about, ai, docs, manifesto]
                    end
                    index -- "scroll event (imperative style overrides)" --> nav["#navbar style"]
                    sub -- "hardcoded static style attribute" --> nav
                    lg[liquid-glass.js] -- "scroll event (specular highlight styles)" --> nav
                    classDef leak stroke:#dc2626,stroke-width:2px;
                    class index,sub,lg leak
                </pre>
              </div>
            </div>
            <div class="border border-stone-200 rounded-lg p-4 bg-stone-50">
              <h3 class="text-xs uppercase tracking-wider text-stone-400 mb-3 font-semibold text-center">After (Deepened Seam)</h3>
              <div class="bg-white p-2 rounded border border-stone-200">
                <pre class="mermaid text-center">
                  flowchart TD
                    subgraph HTML_Pages_Clean [HTML Pages]
                      index_clean[index.html]
                      sub_clean[subpages: about, ai, docs, manifesto]
                    end
                    index_clean -- "semantic clean nav" --> seam((Seam: CSS class))
                    sub_clean -- "semantic clean nav" --> seam
                    lg_deep[liquid-glass.js] -- "adds .scrolled class on scroll threshold" --> seam
                    seam --> css[nav.css]
                    classDef deep fill:#0f172a,stroke:#38bdf8,stroke-width:2px,color:#fff;
                    class lg_deep,css deep
                </pre>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-stone-100">
            <div>
              <h4 class="text-sm font-semibold text-slate-800 mb-2">Problem</h4>
              <p class="text-stone-600 text-sm leading-relaxed">
                The navbar's visual state management is shallow and scattered: visual transitions are partly overridden by inline styles on subpages, and index.html uses custom, imperative JavaScript styles that duplicate the global scroll listener.
              </p>
            </div>
            <div>
              <h4 class="text-sm font-semibold text-slate-800 mb-2">Solution</h4>
              <p class="text-stone-600 text-sm leading-relaxed">
                Consolidate the navbar's visual state into a CSS class toggle operated entirely from the global liquid-glass.js module, eliminating inline styles and duplicate event listeners.
              </p>
            </div>
          </div>

          <div>
            <h4 class="text-sm font-semibold text-slate-800 mb-3">Wins</h4>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-stone-600 pl-4 list-disc font-sans">
              <li>Locality: Styling transition logic concentrates in CSS.</li>
              <li>Leverage: HTML pages use clean semantic tags without inline overrides.</li>
              <li>Locality: Scroll listeners are consolidated to one handler.</li>
              <li>Testability: Verified via simple class assertions.</li>
            </ul>
          </div>
        </article>

        <!-- Candidate 2 -->
        <article class="bg-white border border-stone-200 rounded-xl p-8 shadow-sm space-y-6">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <h2 class="text-2xl font-serif font-semibold text-slate-900">2. Unify Scroll Reveal IntersectionObserver Logic</h2>
            <div class="flex gap-2">
              <span class="bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-0.5 rounded-full text-xs font-semibold">Worth exploring</span>
              <span class="bg-slate-100 text-slate-700 border border-slate-200 px-2.5 py-0.5 rounded-full text-xs font-semibold">in-process</span>
            </div>
          </div>

          <div class="text-stone-500 font-mono text-xs space-y-1">
            <p><strong>Files:</strong></p>
            <ul class="list-disc pl-5">
              <li>website/index.html <span class="text-stone-400">(lines 913-945)</span></li>
              <li>website/about.html <span class="text-stone-400">(lines 374-400)</span></li>
              <li>website/ai.html <span class="text-stone-400">(lines 319-344)</span></li>
              <li>website/manifesto.html <span class="text-stone-400">(lines 205-242)</span></li>
            </ul>
          </div>

          <!-- Side-by-side diagrams -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="border border-stone-200 rounded-lg p-4 bg-stone-50">
              <h3 class="text-xs uppercase tracking-wider text-stone-400 mb-3 font-semibold text-center">Before (Redundant Inline Logic)</h3>
              <div class="bg-white p-2 rounded border border-stone-200">
                <pre class="mermaid text-center">
                  flowchart TD
                    index[index.html] --> obs1[Inline IntersectionObserver 1]
                    about[about.html] --> obs2[Inline IntersectionObserver 2]
                    ai[ai.html] --> obs3[Inline IntersectionObserver 3]
                    manifesto[manifesto.html] --> obs4[Inline IntersectionObserver 4]
                    classDef leak stroke:#dc2626,stroke-width:2px;
                    class obs1,obs2,obs3,obs4 leak
                </pre>
              </div>
            </div>
            <div class="border border-stone-200 rounded-lg p-4 bg-stone-50">
              <h3 class="text-xs uppercase tracking-wider text-stone-400 mb-3 font-semibold text-center">After (Centralized Reveal Module)</h3>
              <div class="bg-white p-2 rounded border border-stone-200">
                <pre class="mermaid text-center">
                  flowchart TD
                    index_r[index.html data-reveal] --> rev[reveal.js]
                    about_r[about.html data-reveal] --> rev
                    ai_r[ai.html data-reveal] --> rev
                    manifesto_r[manifesto.html data-reveal] --> rev
                    classDef deep fill:#0f172a,stroke:#38bdf8,stroke-width:2px,color:#fff;
                    class rev deep
                </pre>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-stone-100">
            <div>
              <h4 class="text-sm font-semibold text-slate-800 mb-2">Problem</h4>
              <p class="text-stone-600 text-sm leading-relaxed">
                Each page copy-pastes a shallow inline script implementing its own IntersectionObserver to trigger fade-in animations on scroll, scattering transition behaviors.
              </p>
            </div>
            <div>
              <h4 class="text-sm font-semibold text-slate-800 mb-2">Solution</h4>
              <p class="text-stone-600 text-sm leading-relaxed">
                Consolidate transition logic into a single dynamic reveal module that animates elements based on declarative HTML data attributes.
              </p>
            </div>
          </div>

          <div>
            <h4 class="text-sm font-semibold text-slate-800 mb-3">Wins</h4>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-stone-600 pl-4 list-disc font-sans">
              <li>Locality: Scroll reveal logic is in a single file.</li>
              <li>Leverage: Elements animate via clean declarative HTML attributes.</li>
              <li>Locality: Respects reduced-motion preferences globally.</li>
              <li>Testability: Threshold parameters are centrally configurable.</li>
            </ul>
          </div>
        </article>

        <!-- Candidate 3 -->
        <article class="bg-white border border-stone-200 rounded-xl p-8 shadow-sm space-y-6">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <h2 class="text-2xl font-serif font-semibold text-slate-900">3. Decouple SF Symbols Mapping from Replacer Engine</h2>
            <div class="flex gap-2">
              <span class="bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-0.5 rounded-full text-xs font-semibold">Worth exploring</span>
              <span class="bg-slate-100 text-slate-700 border border-slate-200 px-2.5 py-0.5 rounded-full text-xs font-semibold">in-process</span>
            </div>
          </div>

          <div class="text-stone-500 font-mono text-xs space-y-1">
            <p><strong>Files:</strong></p>
            <ul class="list-disc pl-5">
              <li>website/js/sf-symbols.js</li>
            </ul>
          </div>

          <!-- Side-by-side diagrams -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="border border-stone-200 rounded-lg p-4 bg-stone-50">
              <h3 class="text-xs uppercase tracking-wider text-stone-400 mb-3 font-semibold text-center">Before (Tight Data-Engine Coupling)</h3>
              <div class="bg-white p-2 rounded border border-stone-200">
                <pre class="mermaid text-center">
                  flowchart TD
                    subgraph sf_symbols [sf-symbols.js]
                      dict[17KB Static SVG Mapping Dictionary]
                      engine[DOM Query & Replacer Loop]
                    end
                    dict -. "tight coupling" .-> engine
                    classDef leak stroke:#dc2626,stroke-width:2px;
                    class dict,engine leak
                </pre>
              </div>
            </div>
            <div class="border border-stone-200 rounded-lg p-4 bg-stone-50">
              <h3 class="text-xs uppercase tracking-wider text-stone-400 mb-3 font-semibold text-center">After (Isolated Registry)</h3>
              <div class="bg-white p-2 rounded border border-stone-200">
                <pre class="mermaid text-center">
                  flowchart TD
                    subgraph sf_symbols_new [sf-symbols.js]
                      registry[SVG Mapping Registry]
                      seam((Seam: Registry Interface))
                      engine_new[DOM Query & Replacer Loop]
                    end
                    registry --> seam --> engine_new
                    classDef deep fill:#0f172a,stroke:#38bdf8,stroke-width:2px,color:#fff;
                    class registry,engine_new deep
                </pre>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-stone-100">
            <div>
              <h4 class="text-sm font-semibold text-slate-800 mb-2">Problem</h4>
              <p class="text-stone-600 text-sm leading-relaxed">
                sf-symbols.js is a shallow module that mixes a large 17KB static SVG dictionary with DOM query traversal logic, making modifications risky and testing difficult.
              </p>
            </div>
            <div>
              <h4 class="text-sm font-semibold text-slate-800 mb-2">Solution</h4>
              <p class="text-stone-600 text-sm leading-relaxed">
                Decouple the mapping data from the execution engine by exposing a clean SVG registration interface seam for symbol resolution.
              </p>
            </div>
          </div>

          <div>
            <h4 class="text-sm font-semibold text-slate-800 mb-3">Wins</h4>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-stone-600 pl-4 list-disc font-sans">
              <li>Locality: SVG mapping data is isolated from execution code.</li>
              <li>Leverage: Replacer logic is reusable with lightweight mock registries.</li>
              <li>Locality: Engine regressions are prevented when adding symbols.</li>
              <li>Testability: Traversal behavior can be verified using a test dictionary.</li>
            </ul>
          </div>
        </article>
      </section>

      <!-- TOP RECOMMENDATION -->
      <section id="top-recommendation" class="bg-slate-900 text-white rounded-xl p-8 shadow-md border border-slate-800">
        <h2 class="text-3xl font-serif font-bold mb-4">Top Recommendation</h2>
        <p class="text-slate-300 text-sm leading-relaxed mb-6">
          We recommend starting with <strong class="text-white">Consolidate Navbar State and Scroll Transition</strong>. This addressable refactoring cleans up inline style overrides across all 5 pages and removes redundant scroll event handlers from index.html. Tying navbar visual transitions to clean class updates reduces duplication and increases the depth of the liquid-glass.js module.
        </p>
        <a href="#candidates" class="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-sky-400 hover:text-sky-300 gap-1">
          Explore Candidate Details &rarr;
        </a>
      </section>
    </main>
  </body>
</html>`;

const tempDir =
  process.env.TMPDIR || process.env.TEMP || process.env.TMP || "/tmp";
const timestamp = Date.now();
const reportFileName = `architecture-review-${timestamp}.html`;
const reportFilePath = path.join(tempDir, reportFileName);

try {
  fs.writeFileSync(reportFilePath, htmlContent, "utf8");
  console.log(`[SUCCESS] Wrote HTML report to: ${reportFilePath}`);

  // Open it using default command
  const command =
    process.platform === "win32"
      ? `start "" "${reportFilePath}"`
      : `open "${reportFilePath}"`;
  exec(command, (err) => {
    if (err) {
      console.error(
        `[ERROR] Failed to automatically open report: ${err.message}`
      );
    } else {
      console.log(`[SUCCESS] Opened report in default browser.`);
    }
  });
} catch (err) {
  console.error(`[FATAL] Failed to write report file: ${err.message}`);
}
