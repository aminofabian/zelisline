import Container from "@/components/system/Container";

const PLACEHOLDER_ROWS = [0, 1, 2];

export default function Loading() {
  return (
    <Container className="py-16 sm:py-20" aria-busy="true" aria-live="polite">
      <p className="sr-only">Loading posts</p>
      <ul className="border-t-2 border-ink">
        {PLACEHOLDER_ROWS.map((row) => (
          <li key={row} className="grid gap-6 border-b border-ink py-8 md:grid-cols-12 md:gap-8" aria-hidden>
            <div className="md:col-span-3">
              <div className="aspect-[4/3] w-full animate-pulse bg-grey-100" />
            </div>
            <div className="space-y-4 md:col-span-9">
              <div className="h-3 w-40 animate-pulse bg-grey-100" />
              <div className="h-7 w-3/4 animate-pulse bg-grey-100" />
              <div className="h-4 w-full animate-pulse bg-grey-50" />
              <div className="h-4 w-2/3 animate-pulse bg-grey-50" />
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}
