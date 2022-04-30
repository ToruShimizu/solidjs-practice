import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import Child from './components/Child';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <Child/>
      </header>
    </div>
  );
};

export default App;
