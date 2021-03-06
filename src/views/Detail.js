import React from 'react';

class Com extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      title: ''
    }
  }
  componentDidMount () {
    const { id } = this.props.match.params;
    fetch('http://www.daxunxun.com/detail?id=' +id).then(res => res.json()).then(data => {
      this.setState({
        title: data[0].title
      })
    })
  }
  goBack () {
    this.props.history.go(-1)
  }
  render () {
    return (
      <div className = "container">
      <div className = "box">
        <header className = "header">
        <button onClick = { this.goBack.bind(this) }>返回</button>
          详情头部
        </header>
        <div className = "content">{ this.state.title }</div>
      </div>
      <footer className = "footer">详情底部</footer>
    </div>
    )
  }
}
export default Com;