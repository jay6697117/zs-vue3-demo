// import { ref } from 'vue'

type Props = {
  title: string
  arr: string[]
}

const renderDom = (props: Props) => {
  return (
    <>
      <div>{props.title}</div>
      <div>{ JSON.stringify(props.arr)}</div>
      <button onClick={() => clickTap(props)}>点击</button>
    </>
  )
}

const clickTap = (props: Props) => {
  console.log('click', props)
}

export default renderDom
