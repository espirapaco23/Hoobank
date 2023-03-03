import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card cursor-pointer`}
  >
    <div
      className={`h-[64px] w-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img
        className="h--[50%] w-[50%] object-contain"
        src={icon}
        alt="icon-svg"
      />
    </div>

    <div className="flex flex-1 flex-col ml-3">
      <h4 className="font-poppins font-semibold text-[18px] text-white leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-[16px] text-dimWhite leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section className={layout.section} id="features">
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="hidden sm:block" /> we’ll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
