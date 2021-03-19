import React, { useState } from "react";

import { Grommet, Box, DataTable, CheckBox } from "grommet";
import { grommet } from "grommet/themes";

// Source code for the data can be found here
// https://github.com/grommet/grommet/blob/master/src/js/components/DataTable/stories/data.js
import { columns, DATA } from "./data";

const TransactionDataTable = () => {
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

export default TransactionDataTable;
