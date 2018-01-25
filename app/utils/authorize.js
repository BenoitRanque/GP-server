import authenticate from './authenticate'

export default function(req, res, next) {
  authenticate(req, res, () => {
    const
      collection
      method
      fields
      owner

    if (auth()) {
      next()
    }
    else {
      res.status(403).send('Access denied')
    }

    function auth () {
      
      if (req.session.user.privileges.some(p => {
        // match at least one existing privilege with privileges required for query
        if (
          // collection match
          (p.collection === collection) &&
          // method match
          (p.method === true || p.method.includes(method)) &&
          // every requested field is included in existing allowed fields
          (p.fields === true || (fields && fields.every(f => p.fields.includes(f)))) &&
          // ownership not required in privilege, or part of the query
          (p.owner === false || owner)
        ) { 
          return true 
        }
        else {
          return false
        }
      })) {
        return true
      }
      return false
    }
  })
}
{
  description: string
  collection: string
  method: [strings]/true
  fields: [strings]/true
  owner: boolean
}

function authorize (req, res, next) {
  console.log(req)
  authenticate()


  // check if permited to access collection

  // permissions object

  roles: {
    permissions: {
      collection: true
      collection2: {
        get: true,
        create: true,
        put: function (doc)
      }
    }
  },
  privileges: [
    {
      collection: 'name',
      get: []
    }
  ]
  privileges: [
    {
      collection: 'name',
      get: true,
      create: true,
      put: {
        fields: ['names'],
        owned: ['fields']
      }
    }
  ]
  'collection',
  'collection_method',
  'collection_method_field',
  'collection_owner_method_field_owner'
  {
    description: string
    collection: string
    method: [strings]/true
    fields: [strings]/true
    owner: boolean
  }

  {
    collection: 'name'
  }
  {
    collection: {
      name: 'name'
      get: true
      put: {
        owner: true,
      }
    }
  }
  {
    users: {
      get: true,
      put: 'owner',
      post: true,
      delete: false
    }
  }

  // swicht method
  switch (req.method) {
    case 'get':
      break
    case 'create':
      break
    case 'put':
      break
    case 'delete':
      break
    default: 
      res.status(500).send('unknown method')
  }
}

function authenticate() {
  // user is authticated
  return true
}

function authorizeCollection(collection, userCollections) {
  return userCollections.includes(collection)
}

function authorizeMethod(method, userMethod) {

}

function authorizeFields() {

}

// authorization object




export default authorize