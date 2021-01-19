import handleBlipFocus from "../utils/handleBlipFocus";
import languages from "./languages";
import platform from "./platform";
import techniques from "./techniques";
import tools from "./tools";

const config = {
  svg_id: "radar",
  width: 1450,
  height: 1000,
  colors: {
    background: "#fff",
    grid: "#bbb",
    inactive: "#ddd",
  },
  title: "Tech Radar",
  print_layout: false,
  rings: [
    { name: "ADOPT", color: "#93c47d" },
    { name: "TRIAL", color: "#93d2c2" },
    { name: "ASSESS", color: "#fbdb84" },
    { name: "HOLD", color: "#efafa9" },
  ],
  quadrants: [
    { name: "Languages & Frameworks" },
    { name: "Platform" },
    { name: "Techniques" },
    { name: "Tools" },
  ],
  entries: [
    ...languages.map((entry) => ({ ...entry, quadrant: 0 })),
    ...platform.map((entry) => ({ ...entry, quadrant: 1 })),
    ...techniques.map((entry) => ({ ...entry, quadrant: 2 })),
    ...tools.map((entry) => ({ ...entry, quadrant: 3 })),
  ],
};

radar_visualization(config);
handleBlipFocus(config);
