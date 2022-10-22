import React from "react";
import { appointments } from "../data/raidData.js";
import { events } from "../data/eventsData.js";
import { members } from "../data/membersData.js";
import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  Resources,
  MonthView,
  Appointments,
  AppointmentTooltip,
} from "@devexpress/dx-react-scheduler-material-ui";

export default class RaidingSchedule extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: appointments,
      resources: [events, members],
    };
  }

  render() {
    const { data, resources } = this.state;

    return (
      <React.Fragment>
        <Paper>
          <Scheduler data={data}>
            <ViewState />
            <MonthView />
            <Appointments />
            <AppointmentTooltip />
            <Resources data={resources} />
          </Scheduler>
        </Paper>
      </React.Fragment>
    );
  }
}
