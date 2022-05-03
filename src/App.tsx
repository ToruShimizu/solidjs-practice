import { Component, createEffect, createSignal } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import Child from './components/Child';
import Counter from './components/Counter';

const App: Component = () => {
  const [first, setFirst] = createSignal("JSON");
  const [last, setLast] = createSignal("Bourne");



  createEffect(() => console.log(`${first()} ${last()}`));
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <Counter/>
        <Child/>
      </header>
    </div>
  );
};

export default App;
