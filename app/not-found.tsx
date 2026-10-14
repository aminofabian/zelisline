import Action from "@/components/system/Action";
import Container from "@/components/system/Container";
import Eyebrow from "@/components/system/Eyebrow";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center border-b border-ink py-20">
      <Container className="grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <Eyebrow>Error 404</Eyebrow>
          <h1 className="display-wide mt-6 font-display text-[6rem] font-bold leading-[0.85] tracking-[-0.05em] sm:text-[11rem]">
            Not found
          </h1>
        </div>
        <div className="space-y-6 lg:col-span-4">
          <p className="text-lg leading-relaxed text-ink-muted">
            The page you were looking for has moved or never existed. Try one of the main sections instead.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Action href="/" arrow>
              Back to home
            </Action>
            <Action href="/contact" variant="outline">
              Contact us
            </Action>
          </div>
        </div>
      </Container>
    </section>
  );
}
