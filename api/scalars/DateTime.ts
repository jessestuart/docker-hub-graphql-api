import { GraphQLScalarType, Kind } from 'graphql'
import _ from 'lodash'
import { DateTime } from 'luxon'

const coerceDateTimeValue = (value: string | number | unknown) => {
  if (!_.isFinite(value) && (!_.isString(value) && _.isEmpty(value))) {
    throw new TypeError(
      `DateTimeString must be either a numeric timestamp or an ISO 8601-compliant ` +
        `Date or DateTime string.`,
    )
  }
  if (typeof value === 'string') {
    return DateTime.fromISO(value)
  }
  if (typeof value === 'number') {
    return DateTime.fromSeconds(value)
  }
}

const DateTimeType = new GraphQLScalarType({
  name: 'DateTime',
  // tslint:disable
  serialize: coerceDateTimeValue,
  parseValue: coerceDateTimeValue,
  parseLiteral: ast => {
    if (ast.kind === Kind.INT) {
      return coerceDateTimeValue(_.toInteger(ast.value))
    }
    if (ast.kind === Kind.STRING) {
      return coerceDateTimeValue(ast.value)
    }
    return undefined
  },
})

export default DateTimeType
