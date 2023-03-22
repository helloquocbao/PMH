import * as React from "react";

import { inject, observer } from "mobx-react";

import { Card } from "antd";
import withRouter from "@components/Layout/Router/withRouter";
import { AppComponentListBase } from "@components/AppComponentBase";
// import { Table } from "antd";

export interface ICallItemProps {}

export interface ICallItemState {}

@inject()
@observer
class CallBoardItem extends AppComponentListBase<
  ICallItemProps,
  ICallItemState
> {
  formRef: any = React.createRef();
  state = {};

  async componentDidMount() {}

  public render() {
    const {} = this.props;

    return (
      <>
        <Card
          style={{
            display: "flex",
            textAlign: "left",
            padding: "8px",
            marginBottom: "10px",
            borderRadius: "12px",
            backgroundColor: "#F2F4F8",
          }}
        >
          <div className="h-100 board-item">
            <strong>Offer name</strong>
            <label>Create By: You</label>
            <label>Client name: Zaire Dorwart</label>
            <label>Time Log: 01/01/2023</label>
            <label>Note: </label>
          </div>
        </Card>
      </>
    );
  }
}

export default withRouter(CallBoardItem);