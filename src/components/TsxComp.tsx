// import { ref } from 'vue'

type Props = {
  title: string
  arr: string[]
}

const renderDom = (props: Props) => {
  return (
    <>
      <div>{props.title}</div>
      <div>{JSON.stringify(props.arr)}</div>
      <button onClick={() => clickTap(props.arr)}>点击</button>
    </>
  )
}

const clickTap = (arr: string[]) => {
  console.log('click 1:', [...arr])
  console.log('click 2:', Object.assign([], arr))
}

export default renderDom
