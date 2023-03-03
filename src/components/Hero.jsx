import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section className={`flex md:flex-row flex-col ${styles.paddingY}`} id="home">
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img className="h-[32px] w-[32px]" src={discount} alt="discount-img" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount For {""}
          <span className="text-white">1 Month</span> Account
        </p>
      </div>

      <div className="flex flex-row w-full justify-between items-center">
        <h1 className="text-white font-poppins ss:text-[72px] text[52px] flex-1 font-semibold ss:leading-[100px] leading-[75px]">
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation</span> {""}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>

      <h1 className="text-white font-poppins ss:text-[69px] text[52px]font-semibold ss:leading-[100px] leading-[75px] w-full">
        Payment Method.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>

    <div className={`flex flex-1  ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        className="w-[100%] h-[100%] relative z-[5]"
        src={robot}
        alt="hand"
      />
      <div className="pink__gradient absolute w-[40%] h-[35%] top-0 z-[0]" />
      <div className="white__gradient absolute w-[80%] h-[80%] bottom-40 z-[1] rounded-full" />
      <div className="blue__gradient absolute w-[50%] h-[50%] right-20 bottom-20 z-[0]" />
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);
export default Hero;
