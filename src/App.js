import { Container } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./Components/MainHeader";
import NewEntryForm from "./Components/NewEntryForm";
import DisplayBalance from "./Components/DisplayBalance";
import OveralBalances from "./Components/OveralBalances";
import EntryLine from "./Components/EntryLine";

function App() {
  return (
    <Container>
      <MainHeader title="BudgetApp" />
      <DisplayBalance title="Your Balance" value="2,050.51$" size="small" />

      <OveralBalances />

      <MainHeader title="History" type="h3" />
      <EntryLine text="Jhona paid you" value="100$" />
      <EntryLine text="Bought Chocolate" value="10$" isExpense />

      {/* FORM */}
      <MainHeader title="Add New Transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
