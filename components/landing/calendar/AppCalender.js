import React, { Component } from "react";
import { addClass } from "@syncfusion/ej2-base";
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
import moment from "moment";
//service
import { setCalendarMarks } from "../../../services/eventService";
//css
import styles from "./calendar.module.sass";

export default class AppCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateArray: [],
    };
    this.date = "";
    this.oneDay = 86400000;
  }

  componentDidMount() {
    this.setText();
  }

  setText = () => {
    let monthDiv = document.createElement("div");
    let month = document.querySelector(".e-header.e-month .e-day.e-title");
    let buttonContainer = document.querySelector(
      ".e-header.e-month .e-icon-container"
    );
    let monthText = month.innerText;
    let displayDate = monthText.split(" ");
    monthDiv.className = styles.calendar_month_display;
    month.className = `${styles.calendar_year_display} e-day e-title`;
    month.innerText = displayDate[1];
    monthDiv.innerText = displayDate[0];
    if (buttonContainer.childNodes.length === 2)
      buttonContainer.insertBefore(monthDiv, buttonContainer.childNodes[1]);
    else {
      buttonContainer.removeChild(buttonContainer.childNodes[1]);
      buttonContainer.insertBefore(monthDiv, buttonContainer.childNodes[1]);
    }
  };

  onchange = (args) => {
    console.log("change args", args);
    const { eventsData } = this.props;
    let displayEvent = [];
    eventsData.eventsData.forEach((eventData) => {
      args["date"] = args.value;
      if (this.isMarkCalendarDates(eventData, args)) {
        displayEvent.push({
          Type: eventData.Type.toString(),
          Title: eventData.Title,
        });
      }
    });
    this.props.setSelectedDay(moment(args.value).format("dddd"));
    this.props.setDisplayEvent(displayEvent);
  };

  componentDidUpdate(prevProps, prevState) {
    setTimeout(() => {
      let month = document.querySelector(".e-header.e-month .e-day.e-title");
      if (month.innerText.indexOf(" ") >= 0) this.setText();
    }, 300);
  }

  getDisplayedMonthYear = (dateArray) => {
    if (dateArray.length > 20) {
      let d = new Date(dateArray[20].date);
      let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
      let mo = new Intl.DateTimeFormat("en", { month: "long" }).format(d);
      return [mo, ye];
    }
  };

  isMarkCalendarDates = (eventData, args) => {
    return (
      (args.date.getTime() <= new Date(eventData.StartDate).getTime() &&
        args.date.getTime() + this.oneDay >=
          new Date(eventData.StartDate).getTime()) ||
      (args.date.getTime() > new Date(eventData.StartDate).getTime() &&
        args.date.getTime() < new Date(eventData.EndDate).getTime())
    );
  };

  getData = (args, eventsData) => {
    let result = [["Events", "events per Day"]];
    eventsData.forEach((eventData) => {
      if (this.isMarkCalendarDates(eventData, args)) {
        result.push([eventData.Type.toString(), 1]);
      }
    });
    return result;
  };

  customDates(args) {
    const { eventsData } = this.props;
    this.setState({ dateArray: [...this.state.dateArray, args] }, () => {
      this.date = this.getDisplayedMonthYear(this.state.dateArray);
    });
    let chartData = this.getData(args, eventsData.eventsData);
    eventsData.eventsData.forEach((eventData) => {
      if (this.isMarkCalendarDates(eventData, args)) {
        this.specialDate(args, eventData.Title.split(" ").join("-"), chartData);
      }
    });
  }

  specialDate(args, name, chartData) {
    args.element.firstElementChild.setAttribute("title", name);
    addClass([args.element], ["e-day", "special", name.toLowerCase(), "flex"]);
    args.element.setAttribute("data-val", name);
    args.element.setAttribute("title", name);
    let innerText = args.element.firstElementChild.innerText;
    this.getChart(args, args.element.id, innerText, chartData);
  }

  getChart = (args, id, innerText, chartData) => {
    let value = 100;
    if (screen.width < 500) value = 90;
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawChart);
    let slices = [...setCalendarMarks(chartData)];
    function drawChart() {
      var data = google.visualization.arrayToDataTable(chartData);
      var options = {
        width: value,
        height: value,
        legend: "none",
        tooltip: { trigger: "none" },
        backgroundColor: { fill: "transparent" },
        pieSliceText: "none",
        slices: slices,
        pieHole: 0.7,
      };
      var chart = new google.visualization.PieChart(
        document.getElementById(id).firstElementChild
      );
      chart.draw(data, options);
      args.element.firstElementChild.firstElementChild.removeAttribute("style");
      args.element.firstElementChild.firstElementChild.setAttribute(
        "style",
        "position: absolute;"
      );
      args.element.firstElementChild.innerHTML += innerText;
    }
  };

  render() {
    return (
      <>
        <CalendarComponent
          id={`${styles.calendar}`}
          renderDayCell={this.customDates.bind(this)}
          change={this.onchange}
          //   start={this.state.view}
          //   depth={this.state.view}
          className="e-customStyle"
        ></CalendarComponent>
      </>
    );
  }
}
