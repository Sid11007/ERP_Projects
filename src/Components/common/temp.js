import React, { Fragment } from "react";
import Table from "../common/Table/Table";
import { Typography, Grid, Checkbox } from "@material-ui/core";
import { SignalCellularAlt } from "@material-ui/icons";
import { useTranslation } from "react-i18next";
import customStyles from "../../assets/css/customStyle";
import TableItemAction from "../common/TableItemAction/TableItemAction";
import { Cached } from "@material-ui/icons";
import moment from "moment";
import theme from "../../assets/theme/theme";
import TableItemText from "../common/common/TableItemText";


export default function DataTable(props) {
  const { t } = useTranslation();
  console.log(props.setIsDataLoading, "qwecv");
  console.log("Data", props.data);
  const data = props.data.map((item, index) => {
    return [


       
      {
        sortRefValue:item.nodeName,
        value:  <TableItemText
        tabIndex={true}
        textLength={window.innerWidth<800?8:25}
        text={item.nodeName}
      />    
       
        // <TableItemText
        // textLength={window.innerWidth<800?10:25}
        // //textArray={item.nodeName}
        //   text={
        //     item.nodeName
        //   }
        // />
      },
      { sortRefValue:item.domainName,
        value: item.domainName },
      { value: item.communicationPort },
      { value: item.createdOn, isDate: true },
      { value: item.createdBy },


      {
         /* Author Name:- Siddhant Rastogi
     Bug 130535 Patch1: Deployment Manager: BAM: Pipeline Execution: Sorting is not working.
     Resolution:- We have changed the tableItemText component and used it in common Table component.
     Date:- 16-June-2023*/
        renderComponent: (
          <TableItemAction
          id={index}
            items={[
              { name: t("Edit"), action: () => props.edit("update node", item)},
              {
                name: t("Delete"),
                action: () => {
                  props.remove(item, "node");
                },
                isRemove: true,
              },
            ]}
          />
        ),
        align: "right",
      },
    ];
  });
  return (
    <Table
      fields={[
        { name: t("Node_Name"), sortData: true },
        { name: t("Domain_Name/IP"), sortData: true },
        { name: t("Port") },
        { name: t("Created_On") },
        { name: t("Created_By") },
        { name: "" },
      ]}
      data={props.isLoading ? [] : data}
      isSearching={props.isSearching}
      serialWidth={50}
      noSerialRequired={false}
      dontShowNoDataText={true}
    />
  );
}