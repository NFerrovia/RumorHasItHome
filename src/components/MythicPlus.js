import React from "react";
import { appointments } from "../data/dungeonData.js";
import { group } from "../data/groupData.js";
import { members } from "../data/membersData.js";
import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  Resources,
  WeekView,
  Appointments,
  AppointmentTooltip,
} from "@devexpress/dx-react-scheduler-material-ui";

export default class MythicPlus extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: appointments,
      resources: [group, members],
    };
  }

  render() {
    const { data, resources } = this.state;

    return (
      <React.Fragment>
        <Paper>
          <Scheduler data={data}>
            <ViewState />
            {/* <WeekView startDayHour={11} endDayHour={23} /> */}
            <WeekView />
            <Appointments />
            <AppointmentTooltip />
            <Resources data={resources} />
          </Scheduler>
        </Paper>
      </React.Fragment>
    );
  }
}
