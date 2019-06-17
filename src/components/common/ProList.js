import React from 'react';
import { Link } from 'react-router-dom';
// const Com = () => (
//   <ul className = "prolist">
//     <li>123</li>
//   </ul>
// )
//声明式跳转
// const Com = ({ prolist }) => (
//   <ul className = "prolist">
//     {
//       prolist.map(item => (
//         <li key = { item.id }>
//           <Link to = { "/detail/" + item.id }>
//             { item.title }
//           </Link>  
//         </li>
//       ))
//     }
//   </ul>
// )
//编程式跳转
class Com extends React.Component {
  goDetail (id) {
    this.props.history.push('/detail/' + id)
  }
  render () {
    return (
      <ul className = "prolist">
        {
          this.props.prolist.map(item => (
            <li key = { item.id }>
              <Link to = { "/detail/" + item.id } onClick = { this.goDetail.bind(this, item.id) }>
                { item.title }
              </Link>  
            </li>
          ))
        }
      </ul>
    )
  }
}
export default Com;