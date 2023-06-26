import {
  Button,
  ButtonGroup,
  ButtonOr,
  Container,
  Form,
  FormGroup,
  FormInput,
  Grid,
  GridColumn,
  GridRow,
  Header,
  Icon,
  Segment,
  Statistic,
  StatisticLabel,
  StatisticValue,
} from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <Container>
      <Header as="h1">Budget</Header>
      <Statistic size="small">
        <StatisticLabel>Your Balance:</StatisticLabel>
        <StatisticValue>1,000</StatisticValue>
      </Statistic>
      <Segment textAlign="center">
        <Grid columns={2} divided>
          <GridRow>
            <GridColumn>
              <Statistic size="tiny" color="green">
                <StatisticLabel>Income:</StatisticLabel>
                <StatisticValue>1,045.25</StatisticValue>
              </Statistic>
            </GridColumn>
            <GridColumn>
              <Statistic size="tiny" color="red">
                <StatisticLabel>Expenses:</StatisticLabel>
                <StatisticValue>1,045.25</StatisticValue>
              </Statistic>
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>

      <Header as="h3">History</Header>
      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <GridRow>
            <GridColumn width={10} textAlign="left">
              Something
            </GridColumn>
            <GridColumn width={3} textAlign="right">
              10,00$
            </GridColumn>
            <GridColumn width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>

      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <GridRow>
            <GridColumn width={10} textAlign="left">
              Something Kinda not that expensive
            </GridColumn>
            <GridColumn width={3} textAlign="right">
              40,00$
            </GridColumn>
            <GridColumn width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>

      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <GridRow>
            <GridColumn width={10} textAlign="left">
              Something Expensive
            </GridColumn>
            <GridColumn width={3} textAlign="right">
              100,00$
            </GridColumn>
            <GridColumn width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>

      {/* FORM */}

      <Header as="h3">Add New Transaction</Header>
      <Form unstackable>
        <FormGroup>
          <FormInput
            icon="tags"
            width={12}
            label="Description"
            placeholder="New Thing"
          />
          <FormInput
            width={4}
            label="Value"
            placeholder="100.00"
            icon="dollar"
            iconPosition="left"
          />
        </FormGroup>
        <ButtonGroup style={{ marginTop: 20 }}>
          <Button>Cancel</Button>
          <ButtonOr />
          <Button color="primary">Ok</Button>
        </ButtonGroup>
      </Form>
    </Container>
  );
}

export default App;
