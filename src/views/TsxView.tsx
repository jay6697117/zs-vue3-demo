import { ref } from 'vue'
import TsxComp from '@/components/TsxComp.tsx'

const v = ref<string>('')
const flag = ref<boolean>(false)
const flag1 = ref<boolean>(false)
const arr = ref<string[]>(['a', 'b', 'c'])

const renderDom = () => {
  return (
    <div>
      <>
        <label>
          输入: <input v-model={v.value} type="text" />
        </label>
        <div style={{ margin: '0 0 10px' }}>输出: {v.value}</div>
      </>

      <hr style={{ margin: '10px 0' }} />

      <>
        <button onClick={() => (flag.value = !flag.value)}>切换</button>
        <div style={{ margin: '10px 0 0' }} v-show={flag.value}>
          景天 v-show {flag.value + ''}
        </div>
        <div style={{ margin: '10px 0 0' }} v-show={!flag.value}>
          雪见 v-show {flag.value + ''}
        </div>
      </>

      <hr style={{ margin: '10px 0' }} />

      <>
        <div>
          <button onClick={() => (flag1.value = !flag1.value)}>切换1</button>
        </div>
        {flag1.value ? (
          <span>{JSON.stringify(flag1.value)} 真</span>
        ) : (
          <span>{JSON.stringify(flag1.value)} 假</span>
        )}
      </>

      <hr style={{ margin: '10px 0' }} />

      <>
        {arr.value.map((item) => (
          <div>{item}</div>
        ))}
      </>

      <hr style={{ margin: '10px 0' }} />

      <>
        <TsxComp title="标题" arr={arr.value} />
        <h1>我是测试</h1>
      </>
    </div>
  )
}

export default renderDom
