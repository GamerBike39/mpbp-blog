'use client';

import Image from "next/image"
import MdxImage from "./mdx-utils/MdxImage";
import MdxVideo from "./mdx-utils/MdxVideo";
import MdxSlider from "./mdx-utils/MdxSlider";
import { BtnAdherer } from "./modules/homepage/components/info/BtnAdherer"
import { useMDXComponent } from "next-contentlayer/hooks"

const components = {
  Image,
  MdxImage,
  MdxSlider,
  MdxVideo,
  BtnAdherer,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}
