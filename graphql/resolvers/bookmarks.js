const Bookmarks = require("../../models/Bookmarks")

module.exports = {
    bookmarks: async () => {
        try {
            return await Bookmarks.find()
        } catch (error) {
            throw error
        }
    },

    // addBookmarks: async args => {
    //     try {
    //         const { url } = args.bookmarks
    //         const bookmark = new Bookmarks({
    //             url
    //         })
    //         const newBookmark = await bookmark.save()
    //         return newBookmark
    //     } catch (error) {
    //         throw error
    //     }
    // }

    addBookmarks: async ({url}) => {
        try {
            const bookmark = new Bookmarks({
                url
            })
            return await bookmark.save()
        } catch (error) {
            throw error
        }
    },

    removeBookmark: async ({_id}) => {
        try {
            return Bookmarks.findByIdAndRemove(_id);
        } catch (error) {
            throw error
        }
    }
}
