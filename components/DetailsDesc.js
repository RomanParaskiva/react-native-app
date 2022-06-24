import { useState } from 'react'
import { View, Text } from 'react-native'

import { EthPrice, NFTTitle } from './SubInfo'
import { COLORS, SIZES, FONTS } from '../constants'

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100))
  const [readMore, setReadMore] = useState(false)

  return (
    <>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />

        <EthPrice price={data.price} />
      </View>

      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text style={{
          fontFamily: FONTS.semiBold,
          fontSize: FONTS.font,
          color: COLORS.primary
        }}>
          Description
        </Text>
        <View style={{ marginTop: SIZES.base }}>
          <Text style={{
            fontFamily: FONTS.regular,
            fontSize: FONTS.small,
            color: COLORS.secondary,
            lineHeight: SIZES.large
          }}>
            {text}
            {!readMore && '...'}
            <Text style={{
              fontFamily: FONTS.semiBold,
              fontSize: FONTS.small,
              color: COLORS.primary
            }}
              onPress={() => {
                !readMore ? setText(data.description) : setText(data.description.slice(0, 100))
                setReadMore(!readMore)
              }}
            >
              {readMore ? ' Show Less' : ' Read More'}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
}

export default DetailsDesc;
