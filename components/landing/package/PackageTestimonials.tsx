import Container from "@/components/system/Container";
import Eyebrow from "@/components/system/Eyebrow";
import type { Testimonial } from "@/types/content";

interface PackageTestimonialsProps {
  testimonials: Testimonial[];
}

export default function PackageTestimonials({ testimonials }: PackageTestimonialsProps) {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Eyebrow>Clients</Eyebrow>
        <h2 className="mt-6 max-w-[14ch] font-display text-[2.4rem] font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl">
          In their words
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="flex flex-col justify-between gap-10 border-t border-grey-200 pt-8">
              <blockquote className="max-w-[42ch] font-display text-2xl font-medium leading-[1.35] tracking-[-0.02em]">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>
              <figcaption>
                <span className="block text-base">{testimonial.name}</span>
                <span className="mt-1 block text-[11px] font-medium uppercase tracking-[0.16em] text-ink-muted">
                  {testimonial.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
