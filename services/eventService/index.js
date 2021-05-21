export const setBackground = (item) => {
  let arrayBgImage = [
    "/upcomingEvent/Activities_Icons_Set2.svg",
    "/upcomingEvent/Activities_Icons_Set3.svg",
    "/upcomingEvent/Activities_Icons_Set4.svg",
    "/upcomingEvent/Activities_Icons_Set5.svg",
  ];
  let bg, boxShadow;
  let bgImage = arrayBgImage[Math.floor(Math.random() * arrayBgImage.length)];
  switch (item.Type) {
    case "EducationalCourses":
      bg = "#F47720";
      boxShadow = "0px 3px 18px #F4772040";
      return [bg, bgImage, boxShadow];
    case "EntertainmentOnlineGames":
      bg = "#299155";
      boxShadow = "0px 3px 18px #29915540";
      return [bg, bgImage, boxShadow];
    case "ReligiousActivities":
      bg = "#245DB7";
      boxShadow = "0px 3px 18px #245DB740";
      return [bg, bgImage, boxShadow];
    case "VirtualSportsRecreational":
      bg = "#6F1E5E";
      boxShadow = "0px 3px 18px #6F1E5E40";
      return [bg, bgImage, boxShadow];
    case "FamilySocial":
      bg = "#1C98D5";
      boxShadow = "0px 3px 18px #1C98D540";
      return [bg, bgImage, boxShadow];
    case "WellbeingAwareness":
      bg = "#F7BD15";
      boxShadow = "0px 3px 18px #F7BD1540";
      return [bg, bgImage, boxShadow];
  }
};

export const setCalendarMarks = (datas) => {
  let result = [];
  datas.slice(1).forEach((data) => {
    switch (data[0]) {
      case "EducationalCourses":
        result.push({ color: "#F47720" });
        break;
      case "EntertainmentOnlineGames":
        result.push({ color: "#299155" });
        break;
      case "ReligiousActivities":
        result.push({ color: "#245DB7" });
        break;
      case "VirtualSportsRecreational":
        result.push({ color: "#6F1E5E" });
        break;
      case "FamilySocial":
        result.push({ color: "#1C98D5" });
        break;
      case "WellbeingAwareness":
        result.push({ color: "#F7BD15" });
        break;
    }
  });
  return result;
};
