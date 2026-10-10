import Container from "@/components/system/Container";
import Eyebrow from "@/components/system/Eyebrow";
import type { Testimonial } from "@/types/content";

interface PackageTestimonialsProps {
  testimonials: Testimonial[];
}

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

export default function PackageTestimonials({ testimonials }: PackageTestimonialsProps) {
  return (
    <section className="border-t border-ink bg-grey-50 py-20 sm:py-28">
      <Container>
        <Eyebrow>Client voices</Eyebrow>
        <h2 className="display-wide mt-6 font-display text-[2rem] font-bold uppercase leading-none tracking-[-0.02em] sm:text-5xl">
          What our clients say
        </h2>

        <div className="mt-14 grid gap-px border border-ink bg-ink md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="flex flex-col justify-between gap-10 bg-paper p-8 sm:p-10">
              <blockquote className="text-pretty text-lg leading-relaxed sm:text-xl">&ldquo;{testimonial.content}&rdquo;</blockquote>
              <figcaption className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-ink font-display text-sm font-bold text-paper" aria-hidden>
                  {getInitials(testimonial.name)}
                </span>
                <span>
                  <span className="block font-display text-lg font-bold">{testimonial.name}</span>
                  <span className="block text-sm text-ink-muted">{testimonial.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
