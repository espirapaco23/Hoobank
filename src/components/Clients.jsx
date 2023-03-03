import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] mb-10`}
          key={client.id}
        >
          <img
            className="w-[100px] sm:w-[192px]  object-contain"
            src={client.logo}
            alt="client-logo"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
