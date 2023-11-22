import Header from "./components/Header";
import Counter from "./components/Counter";
import Controller from "./components/Controller";
function App() {
  return (
    <>
      <div class="w-full p-20 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="flex flex-col items-center pb-10">
          <Header />
          <Counter />
          <Controller />
        </div>
      </div>
    </>
  );
}

export default App;
