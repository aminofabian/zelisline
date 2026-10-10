import Container from "@/components/system/Container";

export default function Loading() {
  return (
    <Container className="max-w-4xl py-14 sm:py-20">
      <div className="h-4 w-40 animate-pulse bg-grey-100" />
      <div className="mt-10 border-b border-ink pb-10">
        <div className="h-4 w-56 animate-pulse bg-grey-100" />
        <div className="mt-6 h-12 w-3/4 animate-pulse bg-grey-100" />
      </div>
      <div className="mt-10 aspect-[16/9] w-full animate-pulse bg-grey-100" />
      <div className="mt-12 space-y-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="h-4 w-full animate-pulse bg-grey-100" />
        ))}
      </div>
    </Container>
  );
}
