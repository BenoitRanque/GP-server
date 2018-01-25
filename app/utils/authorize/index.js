import authenticate from './authenticate'
import authorizeCollection from './authorizeCollection'
import authorizeMethod from './authorizeMethod'
import authorizeFields from './authorizeFields'

export default function authorize (req, res, next) {
  authenticate(req, res, () => {
    authorizeCollection(req, res, () => {
      authorizeMethod(req, res, () => {
        authorizeFields(req, res, next)
      })
    })
  })
}