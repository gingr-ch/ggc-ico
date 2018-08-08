import * as React from 'react';
import './PieChart.css';

class PieChart extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const items = this.props.items;
    const itemsList = items.map((item: any) => (
      <div
        className={'pie-chart__item pie-chart__item--' + item.pos}
        key={item.id.toString()}
      >
        {item.value}
      </div>
    ));

    return <div className="pie-chart">{itemsList}</div>;
  }
}

export default PieChart;
