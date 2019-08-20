import uniquid from 'uniqid'
/**
 * createOne => creation of single record in the database.
 * @param {data} model
 * data should be object
 * ex = {username : x , passw: "y"}
 */
const createOne = model => async (request, response) => {
  try {
    const { data } = request.body
    const createModel = await model.create({ ...data, createdBy: request.user._id, uid: uniquid() })
    response.status(200).json({ data: createModel })
  } catch (e) {
    console.error(e)
    response.status(400).end()
  }
}

/**
 * createMany : A function that create many records at a time.
 * @param {data} model
 * request.data expecting a array;
 * ie: [{ name: 'Star Wars' }, { name: 'The Empire Strikes Back' }]
 */

const createMany = model => async (request, response) => {
  try {
    const { data } = request.body || []
    if (data.length <= 0) {
      return response.status(500).end()
    }
    const createManyModel = await model.createMany(data)
    response
      .status(200)
      .json({ data: createManyModel })
      .end()
  } catch (e) {
    console.error(e)
    response.status(400).end()
  }
}
/**
 * find => Find all the in the database.
 * @param {data} model
 * data must be an object
 * ex: {x: "2"}
 */

const find = model => async (request, response) => {
  try {
    const { data } = request.body
    const findmodel = await model.find(data).exec()
    response.status(200).json(findmodel)
  } catch (e) {
    console.error(e)
    response.status(400).end()
  }
}

/**
 * FindOne => Find a { Single Element } in the database.
 * @param {data} model
 * data must be an object
 * ex: {x: "2"}
 */
const findOne = model => async (request, response) => {
  try {
    const { data } = request.body
    const findOneModel = await model
      .findOne({ data })
      .lean()
      .exec()
    response.status(200).json(findOneModel)
  } catch (e) {
    console.error(e)
    response.status(400).end()
  }
}

// Todo Need to fill this updateOne
/*
const updateOne = model => async (request, response) => {
  try {
    const updateOneModel = await model.updateOne({})
    console.log('update needed', updateOneModel)
  } catch (e) {
    console.error(e)
    response.status(400).end()
  }
} */

// getMany => retrive many element at a time  from the database.
export const getMany = model => async (request, response) => {
  try {
    const docs = await model
      .find({ createdBy: request.user._id })
      .lean()
      .exec()

    response.status(200).json({ data: docs })
  } catch (e) {
    console.error(e)
    response.status(400).end()
  }
}

// getOne => retrive only one element at a time from the database.
export const getOne = model => async (request, response) => {
  try {
    const { user, params } = request
    const doc = await model
      .findOne({ createdBy: user._id, uid: params.id })
      .lean()
      .exec()

    if (!doc) {
      return response.status(400).end()
    }

    response.status(200).json({ data: doc })
  } catch (e) {
    console.error(e)
    response.status(400).end()
  }
}

export const Controller = model => ({
  createOne: createOne(model),
  createMany: createMany(model),
  findOne: findOne(model),
  find: find(model),
  getMany: getMany(model),
  getOne: getOne(model)
})
