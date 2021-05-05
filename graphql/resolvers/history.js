const History = require("../../models/History")

module.exports = {
    history: async () => {
        try {
            const historyFetched = await History.find()
            return historyFetched
        } catch (error) {
            throw error
        }
    },

    lastHistory: async () => {
        try {
            const historyFetched2 = await History.find({}).sort({_id:-1}).limit(1)
            return historyFetched2[0]
        } catch (error) {
            throw error
        }
    },

    // addHistory: async args => {
    //     try {
    //         const { url } = args.history.url
    //         const history = new History({
    //             url
    //         })
    //         const newHistory = await history.save()
    //         return newHistory
    //     } catch (error) {
    //         throw error
    //     }
    // }

    addHistory: async ({url}) => {
        try {
            const history = new History({
                url
            })
            const newHistory = await history.save()
            return newHistory
        } catch (error) {
            throw error
        }
    }
}
