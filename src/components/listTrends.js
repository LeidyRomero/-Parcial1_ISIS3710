import React from 'react';

export default class listTrends extends React.Component {
  state = { 
    "trends": [
        {
			"hashtag": "FelizMiercoles",
			"teweets": 48500
		},
		{
			"hashtag": "ILoveReact",
			"teweets": 1500
		},
		{
			"hashtag": "IHateReact",
			"teweets": 600
		}
    ]
  };
  render() {
    return (
      <div>
       {this.state.menu.map( (e,i) => <Trend key={i} trend={e}/>)}
      </div>
    );
  }
}