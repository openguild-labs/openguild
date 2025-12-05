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

/**
 * Generate a DiceBear avatar URL as fallback for member images
 * Uses pixel-art style to match the OpenGuild branding
 * @see https://www.dicebear.com/
 * @param seed - Unique identifier (username, id, etc.) to generate consistent avatars
 * @param style - DiceBear style (default: 'pixel-art')
 * @returns DiceBear avatar URL
 */
export const getDiceBearAvatar = (
  seed: string,
  style: 'pixel-art' | 'avataaars' | 'bottts' | 'lorelei' | 'micah' | 'notionists' | 'personas' = 'pixel-art'
) => {
  const encodedSeed = encodeURIComponent(seed)
  // Using Polkadot pink colors for the gradient background
  return `https://api.dicebear.com/7.x/${style}/svg?seed=${encodedSeed}&backgroundColor=E6007A,FF2670,6366f1&backgroundType=gradientLinear`
}
