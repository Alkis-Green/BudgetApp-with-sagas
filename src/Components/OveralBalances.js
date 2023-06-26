import React from "react";
import { Grid, GridColumn, GridRow, Segment } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

function OveralBalances() {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <GridRow>
          <GridColumn>
            <DisplayBalance
              title="Income:"
              value="12345.12"
              color="green"
              size="tiny"
            />
          </GridColumn>
          <GridColumn>
            <DisplayBalance
              title="Expenses:"
              value="145.12"
              color="red"
              size="tiny"
            />
          </GridColumn>
        </GridRow>
      </Grid>
    </Segment>
  );
}

export default OveralBalances;
