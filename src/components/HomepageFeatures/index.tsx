import styles from "./styles.module.css";

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container flex flex-row items-center align-middle justify-center gap-64 p-5  ">
        <div>
          <h2 className="text-2xl font-bold leading-tight text-black">
            關於我
          </h2>
          <span className="container">
            <p
              className="
          leading-tight text-black"
            >
              現職前端工程師
            </p>
            <p className="  leading-tight text-black">
              專長為 React Native 應用程式開發
            </p>
          </span>
        </div>
        <img
          src={require("../../../static/img/profile.png").default}
          title="avatar"
          width="350px"
          height="350px"
          className="rounded-2xl shadow-xl"
        />
      </div>
    </section>
  );
}
