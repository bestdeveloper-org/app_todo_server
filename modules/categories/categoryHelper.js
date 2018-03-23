const mongoQuery = require('../../utils/mongoQuery')();
const ObjectID = require("mongodb").ObjectID;

class CategoryHelper {

    async add_edit(data) {
        var findCriteria = {};
        if (data._id) {
            findCriteria._id = ObjectID(data._id);
        } else {
            findCriteria._id = new ObjectID();
        }

        var setCriteria = {
            '$set': {
                name: data.name
            }
        }

        var entity = await mongoQuery.categorySchema.Category.update(findCriteria, setCriteria, {
            upsert: true
        });
        return entity;
    }
}

module.exports = new CategoryHelper();