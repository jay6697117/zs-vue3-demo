import { onMounted } from 'vue'

type Options = {
  el: string
}

type Return = {
  Baseurl: string | null
}

export default function (option: Options): Promise<Return> {
  return new Promise((resolve) => {
    onMounted(() => {
      const node: HTMLImageElement = document.querySelector(option.el) as HTMLImageElement
      node.crossOrigin = 'anonymous';
      node.onload = (): void => {
        setTimeout(() => {
          resolve({
            Baseurl: toBase64(node)
          })
        }, 2000)
      }
    })

    const toBase64 = (el: HTMLImageElement): string => {
      const canvas: HTMLCanvasElement = document.createElement('canvas')
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
      canvas.width = el.width
      canvas.height = el.height
      ctx.drawImage(el, 0, 0, canvas.width, canvas.height)
      // console.log(el.width)
      return canvas.toDataURL('image/png')
    }
  })
}
