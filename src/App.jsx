function Header() {
 return (
  <header>
   <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
   <h1>Filip Tasevski</h1>
   <p>Frontend Developer!</p>
  </header>
 );
}
function App() {
 return (
  <div>
   <Header />
   <main>
    <h2>Time to get started!</h2>
   </main>
  </div>
 );
}

export default App;
