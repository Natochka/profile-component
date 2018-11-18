import React from 'react'
import { oneOfType, string, number } from 'prop-types'
import styled from 'styled-components'
import formatDistanceStrict from 'date-fns/formatDistanceStrict'
import { colors } from '../../styles/common-style'

const shorthandMap = {
  xSeconds: 's',
  xMinutes: 'min',
  xHours: 'h',
  xDays: 'd',
  xMonths: 'm',
  xYears: 'y'
}

const getShorthandValue = value => {
  return shorthandMap[value] || ''
}

const formattedDate = date =>
  formatDistanceStrict(date, new Date(), {
    locale: {
      formatDistance(format, value) {
        let shorthand = getShorthandValue(format)

        return value + shorthand
      }
    }
  })

function RelativeDate({ date }) {
  return <DateWrapper>{formattedDate(date)}</DateWrapper>
}

const DateWrapper = styled.div`
  color: ${colors.lightBlue};
  font-size: 12px;
`

RelativeDate.propTypes = {
  date: oneOfType([number, string])
}

export default RelativeDate
