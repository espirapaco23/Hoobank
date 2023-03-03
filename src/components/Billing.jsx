import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section className={layout.sectionReverse} id="product">
    <div className={layout.sectionImgReverse}>
      <img
        className="relative h-[100%] w-[100%] zi[5]"
        src={bill}
        alt="bill-img"
      />
      <div className="absolute h-[50%] w-[50%] z-[3] -left-1/2 top-0 rounded-full white__gradient" />
      <div className="absolute h-[50%] w-[50%] z-[0] -left-1/2 bottom-0 rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>

      <div className="flex flex-wrap flex-row sm:mt-10 mt-6">
        <img
          className="w-[128px] h-[42px] mr-5 object-contain cursor-pointer"
          src={apple}
          alt="appstore"
        />
        <img
          className="w-[128px] h-[42px] object-contain cursor-pointer"
          src={google}
          alt="google-store"
        />
      </div>
    </div>
  </section>
);

export default Billing;
