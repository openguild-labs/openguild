import { toJpeg, toPng, toSvg } from 'html-to-image'

/* eslint-disable @typescript-eslint/no-explicit-any */
export const convertComponentToJpeg = async (
  ref: React.MutableRefObject<any | null> | undefined
) => {
  const element = ref?.current
  if (!element) return
  const dataUrl = await toJpeg(ref.current, { cacheBust: true })
  return dataUrl
}
