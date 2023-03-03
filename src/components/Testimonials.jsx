import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    id="clients"
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

    <div className="flex justify-between items-center flex-col w-full mb-6 relative z-[1] md:flex-row sm:mb-16">
      <h1 className={styles.heading2}>
        What people are <br className="sm:block hidden" /> saying about us
      </h1>
      <div className="w-full mt-6 md:mt-0">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>
    <div className="flex flex-wrap justify-center w-full relative z-[1] feedback-container sm:justify-start">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
