const { Router } = require('express')
const { activitiesHandler, activitiesCreateHandler, activityDelete} = require ('../handler/activitiesHandler')

const activitiesRouter = Router()


activitiesRouter.get('/', activitiesHandler)

activitiesRouter.post('/', activitiesCreateHandler)

activitiesRouter.delete('/:id', activityDelete)



module.exports = activitiesRouter;