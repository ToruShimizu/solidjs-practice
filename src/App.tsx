import { Component, createEffect, createSignal } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import Child from './components/Child';

const App: Component = () => {
  const [first, setFirst] = createSignal("JSON");
  const [last, setLast] = createSignal("Bourne");

  createEffect(() => console.log(`${first()} ${last()}`));
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <Child/>
      </header>
    </div>
  );
};

export default App;
