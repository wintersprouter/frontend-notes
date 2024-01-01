import styles from "./styles.module.css";

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2>關於我</h2>
        <p>現職前端工程師</p>
        <p>專長為 React Native 應用程式開發</p>
        <a href="mailto:ashleyhsueh33@gmail.com">寄信給我</a>
      </div>
      <img
        src={require("../../../static/img/profile.png").default}
        title="avatar"
        width="350px"
        height="350px"
      />
    </section>
  );
}
