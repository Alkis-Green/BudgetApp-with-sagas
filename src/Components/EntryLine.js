import React from "react";
import { Grid, GridColumn, GridRow, Icon, Segment } from "semantic-ui-react";

function EntryLine({ text, value, isExpense = false }) {
  return (
    <Segment color={isExpense ? "red" : "green"}>
      <Grid columns={3} textAlign="right">
        <GridRow>
          <GridColumn width={10} textAlign="left">
            {text}
          </GridColumn>
          <GridColumn width={3} textAlign="right">
            {value}
          </GridColumn>
          <GridColumn width={3}>
            <Icon name="edit" bordered />
            <Icon name="trash" bordered />
          </GridColumn>
        </GridRow>
      </Grid>
    </Segment>
  );
}

export default EntryLine;
