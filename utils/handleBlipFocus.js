export default (config) => {
  window.addEventListener(
    "hashchange",
    () => {
      let zoomedQuadrant;
      if (window.location.hash) {
        const quadrantMatch = window.location.hash.match(/\d/);
        if (quadrantMatch) {
          zoomedQuadrant = quadrantMatch[0];
        }
      }
      document.getElementById(config.svg_id).innerHTML = "";
      radar_visualization({ ...config, zoomed_quadrant: zoomedQuadrant });
    },
    false
  );
};
