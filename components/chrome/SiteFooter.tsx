import Container from "@/components/system/Container";
import FooterContact from "@/components/chrome/footer/FooterContact";
import FooterDirectory from "@/components/chrome/footer/FooterDirectory";
import FooterLegal from "@/components/chrome/footer/FooterLegal";
import { navigation } from "@/data/navigation";
import { site } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t-2 border-ink bg-paper text-ink">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-70" />
      <div className="relative">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-ink py-4 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">
            <span>
              {site.studio} · {site.coordinates}
            </span>
            <span className="flex items-center gap-2">
              <span aria-hidden className="h-1.5 w-1.5 bg-ink" />
              Available for new projects
            </span>
          </div>

          <div className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-10">
            <FooterContact />
            <FooterDirectory columns={navigation.footer} />
          </div>

          <FooterLegal />
        </Container>
      </div>
    </footer>
  );
}
