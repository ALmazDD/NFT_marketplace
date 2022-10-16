import Categories from "./components/Categories";
import Header from "./components/Header";
import NFTBlock from "./components/NFTBlock";
import Sort from "./components/Sort";

import "./scss/app.scss";

function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все NFT</h2>
          <div class="content__items">
            <NFTBlock title="Mac&chease" price="300" />
            <NFTBlock title="Paper" price={200} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
