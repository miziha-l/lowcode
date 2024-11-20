export const buttonSchema = {
  type: 'object',
  properties: {
    text: {
      type: 'string',
      title: '按钮文字'
    },
    onClick: {
      type: 'string',
      title: '点击事件'
    }
  }
}; 