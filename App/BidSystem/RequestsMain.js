import { View, Text } from 'react-native'
import React from 'react'
import BarterRequestsTopNavigation from '../App/Navigation/BarterRequestsTopNavigation';

import Header from '../SharedComponents/Header';

export default function BarterView() {
  return (
    <>
    <Header/>
    <BarterRequestsTopNavigation />
    </>
  )
}