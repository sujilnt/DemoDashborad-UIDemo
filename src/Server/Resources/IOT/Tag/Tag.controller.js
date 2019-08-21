import { Controller } from '../../CrudController.js'
import { Tag } from './Tag.model'

export const createManyTag = async (request, response) => {
  try {
    const { body, params, user } = request
    const { data } = body || []
    if (data.length <= 0) {
      return response.status(500).end()
    }
    const dataMap = data.map(row => {
      return {
        name: row,
        sensorId: params.id, // Objectid,
        createdBy: user._id
      }
    })
    const createManyModel = await Tag.insertMany(dataMap)
    response
      .status(200)
      .json({ data: createManyModel })
      .end()
  } catch (e) {
    console.error(e)
    response.status(400).end()
  }
}
export default Controller(Tag)
