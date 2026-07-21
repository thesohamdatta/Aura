import {SiteNav} from '../components/layout/TopNav';
import {Footer} from '../components/layout/Footer';
import {DocsLayout} from '../components/docs/DocsLayout';

export function DocsPage() {
  return (
    <>
      <SiteNav />
      <main style={{flex: 1}}>
        <DocsLayout />
      </main>
      <Footer />
    </>
  );
}
