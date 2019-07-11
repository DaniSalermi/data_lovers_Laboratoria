global.window = global;
global.assert = require("chai").assert;
require("../src/data.js");
require("../src/data/worldbank/worldbank.js");
require("./data.spec.js");

describe("data", () => {
  it(" data debería ser un objeto", () => {
    assert.equal(typeof window.data, "object");
  });

  const sampleIndicator = [
    {
      data: { "2001": "", "2002": 31.4799995422363 },
      countryName: "Perú",
      countryCode: "PER",
      indicatorName:
        "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)",
      indicatorCode: "SL.TLF.PART.FE.ZS"
    },
    {
      data: { "2001": 68.7900009155273, "2002": 68.9080963134766 },
      countryName: "Perú",
      countryCode: "PER",
      indicatorName:
        "Tasa de participación en la fuerza laboral, total (% de la población total mayor de 15 años) (estimación nacional)",
      indicatorCode: "SL.TLF.CACT.NE.ZS"
    }
  ];

  describe("data.orderIndicators", () => {
    it("debería ser una función", () => {
      assert.equal(typeof window.data.orderIndicators, "function");
    });

    it("debería retornar 1 para un par de nombres de indicadores", () => {
      let resultIndicatorsOrdered = [
        {
          data: { "2001": "", "2002": 31.4799995422363 },
          countryName: "Perú",
          countryCode: "PER",
          indicatorName:
            "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)",
          indicatorCode: "SL.TLF.PART.FE.ZS"
        },
        {
          data: { "2001": 68.7900009155273, "2002": 68.9080963134766 },
          countryName: "Perú",
          countryCode: "PER",
          indicatorName:
            "Tasa de participación en la fuerza laboral, total (% de la población total mayor de 15 años) (estimación nacional)",
          indicatorCode: "SL.TLF.CACT.NE.ZS"
        }
      ];

      assert.deepEqual(
        window.data.orderIndicators(sampleIndicator),
        resultIndicatorsOrdered
      );
    });
  });

  const sampleData = {
    indicators: [
      {
        data: {
          "2002": "",
          "2003": "",
          "2004": "",
          "2005": "",
          "2006": "",
          "2007": "",
          "2008": "",
          "2009": 22.5900001525879,
          "2010": 31.9099998474121,
          "2011": 33.2400016784668,
          "2012": 33.310001373291,
          "2013": 33.0099983215332,
          "2014": 33.8300018310547,
          "2015": 32.9099998474121,
          "2016": 34.0999984741211,
          "2017": 33.7200012207031
        },
        countryName: "Chile",
        countryCode: "CHL",
        indicatorName:
          "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)",
        indicatorCode: "SL.TLF.PART.FE.ZS"
      },
      {
        data: {
          "2003": 52.7793006896973,
          "2004": "",
          "2005": "",
          "2006": 51.684700012207,
          "2007": "",
          "2008": "",
          "2009": 49.780101776123,
          "2010": 55.3550987243652,
          "2011": 57.0130996704102,
          "2012": 56.421501159668,
          "2013": 56.7743988037109,
          "2014": 56.8973007202148,
          "2015": 55.7249984741211,
          "2016": 55.8078994750977,
          "2017": 55.9445991516113
        },
        countryName: "Chile",
        countryCode: "CHL",
        indicatorName: "Fuerza laboral con educación intermedia (% del total)",
        indicatorCode: "SL.TLF.INTM.ZS"
      }
    ]
  };

  describe("data.informationToGenerateGraph", () => {
    it("debería ser una función", () => {
      assert.equal(typeof window.data.informationToGenerateGraph, "function");
    });

    it("debería retornar el objeto que contiene 2 arreglos de datos y labels", () => {
      let resultArrays = {
        arrayToChart: [
          22.5900001525879,
          31.9099998474121,
          33.2400016784668,
          33.310001373291,
          33.0099983215332,
          33.8300018310547,
          32.9099998474121,
          34.0999984741211,
          33.7200012207031
        ],
        labelArray: [
          "2009",
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017"
        ]
      };
      assert.deepEqual(
        window.data.informationToGenerateGraph(sampleData, 0),
        resultArrays
      );
    });
  });

  describe("data.maximumValueCalculation", () => {
    it("debería ser una función", () => {
      assert.equal(typeof window.data.maximumValueCalculation, "function");
    });

    it("debería retornar el valor máximo dentro de un objeto de valores para un indicador seleccionado", () => {
      let resultMaximum = {
        maxValueOfIndicator: "57.01",
        maxValueDifference: 42.99
      };

      assert.deepEqual(
        window.data.maximumValueCalculation(sampleData, 1),
        resultMaximum
      );
    });
  });

  describe("data.averageValueCalculation", () => {
    it("debería ser una función", () => {
      assert.equal(typeof window.data.averageValueCalculation, "function");
    });

    it("debería retornar el valor máximo dentro de un objeto de valores para un indicador seleccionado", () => {
      let resultAverage = {
        averageValueOfIndicator: "54.93",
        averageValueDifference: 45.07
      };

      assert.deepEqual(
        window.data.averageValueCalculation(sampleData, 1),
        resultAverage
      );
    });
  });
});
