import React from "react";
import { Chart } from '@antv/g2';


export default class G2demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.data = [
      { type: '未知', value: 654, percent: 0.02 },
      { type: '17 岁以下', value: 654, percent: 0.02 },
      { type: '18-24 岁', value: 4400, percent: 0.2 },
      { type: '25-29 岁', value: 5300, percent: 0.24 },
      { type: '30-39 岁', value: 6200, percent: 0.28 },
      { type: '40-49 岁', value: 3300, percent: 0.14 },
      { type: '50 岁以上', value: 1500, percent: 0.06 },
    ];
  }

  render() {
    return (
      <div className="g2-demo">
        <p>g2 demo</p>
        <div id="g2-container"></div>
      </div>
    );
  }

  componentDidMount() {
    // console.log(document.getElementById('g2-container'));
    this.initCharts();
  }

  initCharts() {
    const chart = new Chart({
      container: 'g2-container',
      autoFit: true,
      height: 500,
      padding: [50, 20, 50, 20],
    });
    // console.log(chart);
    chart.data(this.data);
    chart.scale('value', {
      alias: '销售额(万)',
    });

    chart.axis('type', {
      tickLine: {
        alignTick: false,
      },
    });
    chart.axis('value', false);

    chart.tooltip({
      showMarkers: false,
      enterable: true,
      customContent: (name, items) => {
        const tooltip = this.getTooltipItems(name, items);
        // console.log(tooltip);
        return tooltip;
      },
    });
    chart.interval().position('type*value');
    chart.interaction('element-active');

    // 添加文本标注
    this.data.forEach((item) => {
      chart
        .annotation()
        .text({
          position: [item.type, item.value],
          content: item.value,
          style: {
            textAlign: 'center',
          },
          offsetY: -30,
        })
        .text({
          position: [item.type, item.value],
          content: (item.percent * 100).toFixed(0) + '%',
          style: {
            textAlign: 'center',
          },
          offsetY: -12,
        });
    });
    chart.render();

    // chart.on('tooltip:show', (ev) => {
    //   console.log(ev);
    //   const tooltip = document.querySelectorAll('.custom');
    //   console.log(tooltip);
    //   tooltip[0].addEventListener('click', function(event) {
    //     console.log(event.target);
    //   })
    // });
  }

  getTooltipItems(name, items) {
    const container = document.createElement('div');
    container.className = 'g2-tooltip';
    const title = `<div class="g2-tooltip-title" style="margin-top: 12px;margin-bottom: 12px;">${name}</div>`;
    const ul = document.createElement('ul');
    ul.style.cssText = 'list-style: none; margin: 0; padding: 0;'
    items.forEach((item, index) => {
      const li = document.createElement('li');
      li.className = 'g2-tooltip-list-item';
      li.dataset.index = index;
      li.style.cssText= 'padding: 0 10px; margin-bottom:4px;display:flex;align-items: center;';
      li.innerHTML = `<span style="background-color:${item?.mappingData?.color || item?.color};" class="g2-tooltip-marker"></span>
          <span class="custom" data-index={index} style="display:inline-flex;flex:1;justify-content:space-between">
          <span style="margin-right: 16px;">${item?.name}:</span><span>${item?.value}</span>
          </span>`;
      li.onclick = function(event) {
        console.log(event.target);
      }
      ul.appendChild(li);
    });
    container.innerHTML = title;
    container.appendChild(ul);
    return container;
  }

}
