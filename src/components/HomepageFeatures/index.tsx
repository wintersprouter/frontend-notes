import styles from "./styles.module.css";

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className="text-2xl font-bold">關於我</h2>
        <span className="container">
          <p className="leading-tight">Front End Engineer</p>
          <p className="leading-tight"> React | React Native</p>
          <a href="mailto:ashleyhsueh33@gmail.com">ashleyhsueh33@gmail.com</a>
        </span>
      </div>
    </section>
  );
}
