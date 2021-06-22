var margins = { top: 45, right: 40, bottom: 30, left: 80 };

var values = {
  "General opinion of NSA": [
    "Extremely negative",
    "Decidedly negative",
    "Somewhat negative",
    "Slightly negative",
    "Neutral",
    "Slightly positive",
    "Somewhat positive",
    "Decidedly positive",
    "Extremely positive",
  ],
  "Familiarity with NSA": [
    "Not familiar at all",
    "Slightly familiar",
    "Somewhat familiar",
    "Reasonably familiar",
    "Very familiar",
  ],
  Country: ["USA", "EU", "BRIC countries", "Other"],
  "Familiarity with Snowden": [
    "Not familiar at all",
    "Slightly familiar",
    "Somewhat familiar",
    "Reasonably familiar",
    "Very familiar",
  ],
  "Technical proficiency": [
    "Not proficient at all",
    "Slightly proficient",
    "Somewhat proficient",
    "Reasonably proficient",
    "Very proficient",
  ],
  "Change in opinion of NSA": [
    "Greatly diminished",
    "Somewhat diminished",
    "Slightly diminished",
    "Did not influence",
    "Slightly improved",
    "Somewhat improved",
    "Greatly improved",
  ],
  "Overall concern": [
    "Not concerning at all",
    "Slightly concerning",
    "Somewhat concerning",
    "Decidedly concerning",
    "Very concerning",
  ],
  "Change in infosec awareness": [
    "Not at all",
    "Slightly increased",
    "Somewhat increased",
    "Decidedly increased",
    "Greatly increased",
  ],
};

function makeChart(id, measure0, selector, measure1, measure2, color) {
  let chart = d3.select("#" + id);
  makeInnerArea(chart);

  let data = d3
    .csv("data.csv", function (d, i, names) {
      return {
        Timestamp: d["Timestamp"],
        "General opinion of NSA": d["What is your general opinion on the NSA?"],
        "Familiarity with NSA":
          d[
            "How familiar are you with function of the NSA (United States National Security Agency)?"
          ],
        Country: d["Where do you live?"],
        "Familiarity with Snowden":
          d[
            "How familiar are you with actions of Edward Snowden in relation to the NSA activities?"
          ],
        "Technical proficiency":
          d[
            "How would you judge your level of proficiency in using information technology?"
          ],
        "Change in opinion of NSA":
          d[
            "Did the NSA revelations (information disseminated by Edward Snowden) change your opinion of the NSA?"
          ],
        "Overall concern": d["Do you find NSA revelations concerning?"],
        "Change in infosec awareness":
          d[
            "Did the NSA revelations increase your information security awareness?"
          ],
      };
    })
    .then(function (data) {
      createFromData(
        chart,
        data,
        measure0,
        selector,
        measure1,
        measure2,
        color
      );
    });
}

function createFromData(
  chart,
  data,
  measure0,
  selector,
  measure1,
  measure2,
  color
) {
  let filtered_data = data.filter(e => e[measure0] == selector);
  let measure_mix = makeMeasureMix(measure1, measure2);

  let totalWidth = chart.attr("width");
  let totalHeight = chart.attr("height");
  let innerWidth = totalWidth - margins.left - margins.right;
  let innerHeight = totalHeight - margins.top - margins.bottom;

  let middle = totalWidth / 2;
  let bottomPadded = innerHeight - 100;

  let measure1_scale = d3
    .scaleOrdinal()
    .domain(values[measure1])
    .range(makeNormalRange(measure1));

  let measure2_scale = d3
    .scaleOrdinal()
    .domain(values[measure2])
    .range(makeNormalRange(measure2));

  let radius_scale = d3.scaleLinear().domain([0, data.length]).range([0, 350]);

  let colors = [
    d3.interpolateRainbow,
    d3.interpolateSpectral,
    d3.interpolateRdYlGn,
    d3.interpolateSinebow,
    d3.interpolateCool,
  ];
  let graph_colors = d3.scaleSequential(colors[color]);

  // chart.selectAll(".circle").remove();
  // chart.selectAll(".line").remove();

  let circles = chart.selectAll(".circle").data(measure_mix);
  let curve = d3.line().curve(d3.curveMonotoneY);
  let lines = chart.selectAll(".line").data(filtered_data);

  chart
    .append("text")
    .attr("id", "selector")
    .attr("x", totalWidth / 2)
    .attr("y", 23)
    .attr("font-family", "monospace")
    .attr("font-size", "20")
    .attr("stroke", "white")
    .attr("fill", "white")
    .attr("text-anchor", "middle")
    .text(selector);

  lines
    .enter()
    .append("path")
    .merge(lines)
    .attr(
      "class",
      d => "line " + (d[measure1] + "-" + d[measure2]).replace(/\s/g, "")
    )
    .attr("d", d =>
      curve(
        calcPoints(
          d,
          totalWidth,
          totalHeight,
          innerWidth,
          innerHeight,
          measure1,
          measure2,
          measure1_scale,
          measure2_scale
        )
      )
    )
    .attr("stroke", d =>
      graph_colors(
        measure_mix.findIndex(
          e => e.measureMix1 == d[measure1] && e.measureMix2 == d[measure2]
        ) / measure_mix.length
      )
    )
    .attr("stroke-width", function (d) {
      if (d[measure0] == selector) {
        return 1;
      } else {
        return 0;
      }
    })
    .attr("fill", "none")
    .on("mouseover", function (d, i) {
      d3.select(this).attr("stroke-width", 5);

      let circle = chart.select(
        "#" + (d[measure1] + "-" + d[measure2]).replace(/\s/g, "")
      );
      let radius = parseInt(circle.attr("r"));
      circle.attr("r", radius + 5);

      let mouse = d3.mouse(chart.node());

      let mx = mouse[0];
      let my = mouse[1];

      let width = 430;
      let height = 60;

      let x = 0;
      if (measure1_scale(d[measure1]) >= 0.5) {
        x = Math.max(mx - 420, 0);
      } else {
        x = mx + 15;
        if (x + width > totalWidth) {
          x = totalWidth - width;
        }
      }

      chart
        .append("rect")
        .attr("id", ("lr" + d[measure1] + "-" + d[measure2]).replace(/\s/g, ""))
        .attr("x", x)
        .attr("y", my - 10)
        .attr("width", width)
        .attr("height", height)
        .attr("style", "pointer-events: none;")
        .attr("opacity", 0.83)
        .attr(
          "fill",
          graph_colors(
            measure_mix.findIndex(
              e => e.measureMix1 == d[measure1] && e.measureMix2 == d[measure2]
            ) / measure_mix.length
          )
        );

      chart
        .append("text")
        .attr("id", ("lt" + d[measure1] + "-" + d[measure2]).replace(/\s/g, ""))
        .attr("x", x + 5)
        .attr("y", my + 5)
        .attr("font-family", "monospace")
        .attr("font-size", "15")
        .attr("stroke", "white")
        .attr("fill", "white")
        .attr("textLength", 1000)
        .attr("lengthAdjust", "spacingAndGlyphs")
        .attr("style", "pointer-events: none;")
        .attr("text-anchor", "start")
        .text("Timestamp" + ": " + d["Timestamp"])
        .append("tspan")
        .attr("x", x + 5)
        .attr("dy", 20)
        .text(measure1 + ": " + d[measure1])
        .append("tspan")
        .attr("x", x + 5)
        .attr("dy", 20)
        .text(measure2 + ": " + d[measure2]);
    })
    .on("mouseout", function (d, i) {
      d3.select(this).attr("stroke-width", 1);

      let circle = chart.select(
        "#" + (d[measure1] + "-" + d[measure2]).replace(/\s/g, "")
      );
      let radius = parseInt(circle.attr("r"));
      circle.attr("r", radius - 5);

      chart
        .select(("#lt" + d[measure1] + "-" + d[measure2]).replace(/\s/g, ""))
        .remove();
      chart
        .select(("#lr" + d[measure1] + "-" + d[measure2]).replace(/\s/g, ""))
        .remove();
    });

  circles
    .enter()
    .append("circle")
    .merge(circles)
    .attr("class", "circle")
    .attr("id", d => (d.measureMix1 + "-" + d.measureMix2).replace(/\s/g, ""))
    .attr("cx", d => innerWidth * measure1_scale(d.measureMix1) + margins.left)
    .attr(
      "cy",
      d =>
        bottomPadded -
        bottomPadded * measure2_scale(d.measureMix2) +
        margins.top
    )
    .attr("r", function (d) {
      count = 0;
      for (i = 0; i < data.length; i++) {
        if (
          data[i][measure1] == d.measureMix1 &&
          data[i][measure2] == d.measureMix2 &&
          data[i][measure0] == selector
        ) {
          count++;
        }
      }

      if (!count) return 0;

      if (count && count < 5) {
        count += 5;
      }
      return radius_scale(count);
    })
    .attr("opacity", 0.8)
    .attr("fill", (d, i) => graph_colors(i / measure_mix.length))
    .on("mouseover", function (d, i) {
      d = measure_mix[i];

      let cx = parseInt(d3.select(this).attr("cx"));
      let cy = parseInt(d3.select(this).attr("cy"));

      let width = 430;
      let height = 60;

      d3.select(this).attr("r", parseInt(d3.select(this).attr("r")) + 5);

      chart
        .selectAll(
          "." + (d.measureMix1 + "-" + d.measureMix2).replace(/\s/g, "")
        )
        .attr("stroke-width", 2);

      let x = 0;
      if (measure1_scale(d.measureMix1) >= 0.5) {
        x = Math.max(cx - 420, 0);
      } else {
        x = cx + 15;
        if (x + width > totalWidth) {
          x = totalWidth - width;
        }
      }

      chart
        .append("rect")
        .attr(
          "id",
          ("r" + d.measureMix1 + "-" + d.measureMix2).replace(/\s/g, "")
        )
        .attr("x", x)
        .attr("y", cy - 10)
        .attr("width", width)
        .attr("height", height)
        .attr("style", "pointer-events: none;")
        .attr("opacity", 0.83)
        .attr("fill", graph_colors(i / measure_mix.length));

      chart
        .append("text")
        .attr(
          "id",
          ("t" + d.measureMix1 + "-" + d.measureMix2).replace(/\s/g, "")
        )
        .attr("x", x + 5)
        .attr("y", cy + 5)
        .attr("font-family", "monospace")
        .attr("font-size", "15")
        .attr("stroke", "white")
        .attr("fill", "white")
        .attr("textLength", 800)
        .attr("lengthAdjust", "spacingAndGlyphs")
        .attr("style", "pointer-events: none;")
        .attr("text-anchor", "start")
        .text(measure1 + ": " + d.measureMix1)
        .append("tspan")
        .attr("x", x + 5)
        .attr("dy", 20)
        .text(measure2 + ": " + d.measureMix2)
        .append("tspan")
        .attr("x", x + 5)
        .attr("dy", 20)
        .text(function (e) {
          count = 0;
          for (i = 0; i < data.length; i++) {
            if (
              data[i][measure1] == d.measureMix1 &&
              data[i][measure2] == d.measureMix2 &&
              data[i][measure0] == selector
            ) {
              count++;
            }
          }
          return "count: " + count;
        });
    })
    .on("mouseout", function (d, i) {
      d = measure_mix[i];
      d3.select(this).attr("r", parseInt(d3.select(this).attr("r")) - 5);

      chart
        .selectAll(
          "." + (d.measureMix1 + "-" + d.measureMix2).replace(/\s/g, "")
        )
        .attr("stroke-width", 1);

      chart
        .select(("#t" + d.measureMix1 + "-" + d.measureMix2).replace(/\s/g, ""))
        .remove();
      chart
        .select(("#r" + d.measureMix1 + "-" + d.measureMix2).replace(/\s/g, ""))
        .remove();
    });
}

function calcPoints(
  d,
  totalWidth,
  totalHeight,
  innerWidth,
  innerHeight,
  measure1,
  measure2,
  measure1_scale,
  measure2_scale
) {
  let randomness = [4, 60];

  let bottomPadded = innerHeight - 100;
  let middle = totalWidth / 2;

  let point1 = [middle, totalHeight];

  let x2 = innerWidth * measure1_scale(d[measure1]) + margins.left;
  let y2 =
    bottomPadded - bottomPadded * measure2_scale(d[measure2]) + margins.top;
  let point2 = [x2, y2];

  let x_curve = middle;
  let y_curve =
    (innerHeight + y2) / 2 +
    Math.floor(Math.random() * randomness[1] + randomness[0]);

  // Prevent going out of bounds due to randomness
  if (y_curve > innerHeight + margins.top) {
    y_curve = innerHeight + margins.top;
  }

  let curvePoint = [x_curve, y_curve];

  return [point1, curvePoint, point2];
}

function makeMeasureMix(measure1, measure2) {
  let result = [];
  for (i = 0; i < values[measure1].length; i++) {
    for (j = 0; j < values[measure2].length; j++) {
      result.push({
        measureMix1: values[measure1][i],
        measureMix2: values[measure2][j],
      });
    }
  }
  return result;
}

function makeNormalRange(measure) {
  range = [];
  count = 0;
  add = 1 / (values[measure].length - 1);
  for (i = 0; i < values[measure].length; i++) {
    range.push(count);
    count += add;
  }
  return range;
}

function makeInnerArea(chart) {
  chart
    .append("rect")
    .attr("class", "inner")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", chart.attr("width"))
    .attr("height", chart.attr("height"))
    .attr("fill", "rgba(17, 24, 39, 1");
}
