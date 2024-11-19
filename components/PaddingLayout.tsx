import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'

type PaddingLayoutProps = {
    children: ReactNode,
    px?: string
}

const PaddingLayout = ({children, px}:PaddingLayoutProps) => {
  return (
    <View className={`${px || "px-[22px]"} `}>
      {children}
    </View>
  )
}

export default PaddingLayout