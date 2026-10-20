import Action from "@/components/system/Action";
import Container from "@/components/system/Container";
import Eyebrow from "@/components/system/Eyebrow";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-24">
      <Container className="grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <Eyebrow>404</Eyebrow>
          <h1 className="mt-6 font-display text-[4.5rem] font-medium leading-[0.95] tracking-[-0.04em] sm:text-[7rem]">
            This page is not here
          </h1>
        </div>
        <div className="space-y-6 lg:col-span-4">
          <p className="max-w-[32ch] text-lg leading-[1.7] text-ink-muted">
            It may have moved. The studio is still easy to find.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Action href="/" arrow>
              Back to home
            </Action>
            <Action href="/contact" variant="outline">
              Write to us
            </Action>
          </div>
        </div>
      </Container>
    </section>
  );
}
