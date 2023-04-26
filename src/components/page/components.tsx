import React, {createElement} from 'react'
import { Color } from '@antv/x6'
import { ReactShape } from '@antv/x6-react-shape'

export default class MyComponent extends React.Component<{
  node?: ReactShape
  text: string
}> {
  shouldComponentUpdate() {
    const node = this.props.node
    if (node) {
      if (node.hasChanged('data')) {
        return true
      }
    }

    return false
  }

  render() {
    console.log("HH")
    const color = Color.randomHex()
    return (
      <div
        style={{
          color: Color.invert(color, true),
          width: '100%',
          height: '100%',
          textAlign: 'center',
          lineHeight: '40px',
          background: color,
        }}
      >
        {this.props.text}
      </div>
    )
  }
}
