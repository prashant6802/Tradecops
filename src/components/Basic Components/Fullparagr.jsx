import React from 'react'
import Paragr from '../Paragr.jsx'
import Paragrtitle from '../Paragrtitle.jsx'
import Text from '../Text.jsx'
import Largeheading from '../Largeheading.jsx'

const Fullparagr = (props) => {
  return (
    <div style={{width: props.width, height: props.height}}>
      <Paragrtitle top="JOIN THE TRADECOPS REVOLUTION"/>
      <Largeheading bot="Why Choose Us?"/>
      <Paragr image="https://i.imgur.com/5fzMln4.png" heading="Your Trading Oasis" />
      <Text text="Step into our dedicated workspace designed exclusively for traders like you. Say goodbye to distractions and immerse yourself in an environment that encourages focus and productivity."/>
      <Paragr image="https://i.imgur.com/TiFCANO.png" heading="MQL Copy Trade" />
      <Text text="Unlock the power of successful traders with our MQL Copy Trade feature. Mirror the trades of expert traders, potentially boosting your profits and generating a consistent income stream." />
      <Paragr image="https://i.imgur.com/5fzMln4.png" heading="Pamm Account" />
      <Text text="Let experienced money managers handle your investments with our Pamm Account feature. Benefit from their expertise and maximize returns while you focus on other aspects of your trading journey." />
    </div>
  )
}

export default Fullparagr
