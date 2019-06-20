import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class Chart extends Component{

  data = {
    datasets: [
      {
        label: 'Top Pizza Lovers',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: this.props.chartData
      }
    ]
  };

  render(){
    return (
      <div className="chart">
        <Bar
          data={this.data}
          width={500}
          height={500}
          options={{
            maintainAspectRatio: false
          }}
        />

        
      </div>
    )
  }
}

export default Chart;