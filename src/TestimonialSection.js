import TestimonialCard from './TestimonialCard';

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <h2>Testimonials</h2>
      <div className="testimonial-container">
        <TestimonialCard
          name="John"
          imageName="person1"
          rating={5}
          comments="Delicious Food and luxurious"
        />
        <TestimonialCard
          name="Maria"
          imageName="person2"
          rating={4}
          comments="Food is good. My favorite is Dessert."
        />
        <TestimonialCard
          name="Lisa"
          imageName="person3"
          rating={3}
          comments="Food is not bad, but serving is not so fast..."
        />
        <TestimonialCard
          name="Harry"
          imageName="person4"
          rating={2}
          comments="It's expensive..."
        />
      </div>
    </section>
  );
};

export default TestimonialSection;
