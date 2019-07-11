/* Manejo de data */

window.data = {
  Chart: {},
  // FUNCIÓN PARA ORDENAR INDICADORES DENTRO DEL SELECT
  orderIndicators: indicators => {
    return indicators.sort((a, b) =>
      a.indicatorName < b.indicatorName ? -1 : 1
    );
  },

  // FUNCIÓN PARA GENERACIÓN DE ARREGLOS PARA CREACIÓN DE GRÁFICO DE LÍNEAS:
  informationToGenerateGraph: (selectedData, selectedIndicator) => {
    let arrayToChart = [];
    let labelArray = [];
    let indicatorNumber = selectedIndicator;
    for (let year in selectedData.indicators[indicatorNumber].data) {
      if (selectedData.indicators[indicatorNumber].data[year] !== "") {
        arrayToChart.push(selectedData.indicators[indicatorNumber].data[year]);
        labelArray.push(year);
      }
    }
    return { arrayToChart, labelArray };
  },

  // FUNCIÓN PARA CÁLCULO DEL MÁXIMO PARA CREACIÓN GRÁFICO DE DONAS:
  maximumValueCalculation(selectedData, selectedIndicator) {
    let indicatorNumber = selectedIndicator;
    let maxValueOfIndicator = 0;
    let maxValueDifference = 0;
    for (let year in selectedData.indicators[indicatorNumber].data) {
      if (selectedData.indicators[indicatorNumber].data[year] !== "") {
        if (
          selectedData.indicators[indicatorNumber].data[year] >
          maxValueOfIndicator
        ) {
          maxValueOfIndicator = parseFloat(
            selectedData.indicators[indicatorNumber].data[year]
          ).toFixed("2");
        }
      }
    }
    maxValueDifference = 100 - maxValueOfIndicator;
    return { maxValueOfIndicator, maxValueDifference };
  },

  // FUNCIÓN PARA CÁLCULO DEL PROMEDIO PARA CREACIÓN GRÁFICO DE DONAS:
  averageValueCalculation(selectedData, selectedIndicator) {
    let indicatorNumber = selectedIndicator;
    let totalOfIndicators = 0;
    let averageValueOfIndicator = 0;
    let sumOfIndicatorsData = 0;
    let averageValueDifference = 0;
    for (let year in selectedData.indicators[indicatorNumber].data) {
      if (selectedData.indicators[indicatorNumber].data[year] !== "") {
        sumOfIndicatorsData =
          sumOfIndicatorsData +
          selectedData.indicators[indicatorNumber].data[year];
        totalOfIndicators = totalOfIndicators + 1;
      }
    }
    averageValueOfIndicator = parseFloat(
      sumOfIndicatorsData / totalOfIndicators
    ).toFixed("2");
    averageValueDifference = 100 - averageValueOfIndicator;
    return { averageValueOfIndicator, averageValueDifference };
  }
};
