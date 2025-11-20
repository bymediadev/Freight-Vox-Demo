export default {
  // stores all alerts in the right panel
  alerts: [],

  // core function to simulate FreightVox engine output
  triggerEvent(eventType) {
    let enginePayload = {};
    let alertMessage = "";

    switch(eventType) {
      case "delay_toronto":
        enginePayload = {
          driver: "Mike Johnson",
          load: "LV-241D9275",
          status: "delay",
          location: "Toronto",
          route: "Toronto → Montreal",
          cause: "Peak-hour congestion on Hwy 401",
          severity: "High",
          recommendation: "Notify dispatch + adjust ETA",
          timestamp: new Date().toISOString()
        };
        alertMessage = "🚨 Delay detected at Toronto (Hwy 401 congestion). SOP triggered.";
        break;

      case "breakdown":
        enginePayload = {
          driver: "Sarah Lee",
          load: "LV-8892C342",
          status: "breakdown",
          location: "Hwy 401",
          route: "Toronto → Windsor",
          cause: "Mechanical issue",
          severity: "Critical",
          recommendation: "Dispatch tow + notify shipper",
          timestamp: new Date().toISOString()
        };
        alertMessage = "🔥 Breakdown reported on Hwy 401. Immediate escalation required.";
        break;

      case "border_hold":
        enginePayload = {
          driver: "Tom Garcia",
          load: "LV-9941X771",
          status: "border hold",
          location: "Windsor-Detroit Crossing",
          route: "Windsor → Detroit",
          cause: "CBSA secondary inspection",
          severity: "Medium",
          recommendation: "Update customer + monitor wait time",
          timestamp: new Date().toISOString()
        };
        alertMessage = "🛂 Border hold at Windsor (secondary inspection). Monitoring...";
        break;

      case "missing_info":
        enginePayload = {
          driver: "Unknown",
          load: "N/A",
          status: "incomplete",
          issue: "Missing load number + driver name",
          severity: "Low",
          recommendation: "Request corrected info",
          timestamp: new Date().toISOString()
        };
        alertMessage = "⚠️ Missing driver/load information. Requesting clarification.";
        break;

      case "weather":
        enginePayload = {
          driver: "Evan Smith",
          load: "LV-77722Q11",
          status: "delay",
          location: "BC Interior",
          route: "Vancouver → Calgary",
          cause: "Snow + reduced visibility",
          severity: "Medium",
          recommendation: "Adjust ETA + route if needed",
          timestamp: new Date().toISOString()
        };
        alertMessage = "❄️ Severe weather detected in BC Interior. Delay expected.";
        break;
    }

    // Update engine output
    storeValue("engine", enginePayload);

    // Update alert log
    this.alerts = [...this.alerts, {
      message: alertMessage,
      timestamp: new Date().toLocaleTimeString()
    }];
    storeValue("alerts", this.alerts);
  }
};
