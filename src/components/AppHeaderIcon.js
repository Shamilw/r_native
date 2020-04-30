import React from 'react'
import { Platform } from 'react-native'
import { HeaderButton } from 'react-navigation-header-buttons'
import { FontAwesome } from '@expo/vector-icons'
import { THEME } from '../theme'

export const AppHeaderIcon = props => (
  <HeaderButton
    {...props}
    iconSize={20}
    IconComponent={FontAwesome}
    color={THEME.MAIN_GREY}
  />
)
