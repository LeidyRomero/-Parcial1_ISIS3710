import React from 'react';

export default class toFollowList extends React.Component {
  state = { 
    "follows": [
        {"avatar":"http://dummyimage.com/50x50.jpg/dddddd/000000", "first_name":"Belvia","last_name":"Kelley","nick":"@bkelley7a"},
		{"avatar":"http://dummyimage.com/50x50.jpg/dddddd/000000", "first_name":"Luis","last_name":"Gomez","nick":"@lgomez"},
		{"avatar":"http://dummyimage.com/50x50.jpg/dddddd/000000", "first_name":"CNN","last_name":"Channel","nick":"@cnn"}
    ]
  };
  render() {
    return (
      <div>
        {this.state.menu.map( (e,i) => <ToFollow key={i} follow={e}/>)}
      </div>
    );
  }
}