import Alert from "./lib/components/Alert";
import Card from "./lib/components/Card";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Design System 2</h1>
      <h2>Lorem ipsum </h2>

      <Card
        alt="test-alt"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s"
        title="hello"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est"
      />
      <Alert 
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      />
    </div>
  );
}
