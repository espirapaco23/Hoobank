import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div
        className={`flex flex-1 justify-start items-center flex-row m-3`}
        key={stat.id}
      >
        <h4 className="xs:text=[40px] xs:leading-[53px] leading-[43px] text-[30px] font-poppins font-semibold text-white">
          {stat.value}
        </h4>
        <p className="xs:text=[20px] xs:leading-[26px] leading-[21px] text-[15px] font-poppins font-normal text-gradient ml-3 uppercase">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);
export default Stats;
