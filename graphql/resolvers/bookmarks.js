const Bookmarks = require("../../models/Bookmarks")

module.exports = {
    bookmarks: async () => {
        try {
            const bookmarksFetched = await Bookmarks.find()
            return bookmarksFetched
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
            const newBookmark = await bookmark.save()
            return newBookmark
        } catch (error) {
            throw error
        }
    }
}
