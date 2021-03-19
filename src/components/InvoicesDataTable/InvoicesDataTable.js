import React, { useState } from "react";

import { Grommet, Box, DataTable, CheckBox } from "grommet";
import { grommet } from "grommet/themes";
import { columns, DATA } from "./data";

const InvoicesDataTable = () => {
  const [select, setSelect] = useState([]);
  console.log("select: Transections", select);
  return (
    <Grommet theme={grommet}>
      <Box align="center" pad="large">
        <DataTable
          columns={columns}
          data={DATA}
          select={select}
          onSelect={setSelect}
        />
      </Box>
    </Grommet>
  );
};

export default InvoicesDataTable;
