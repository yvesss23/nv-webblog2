import Api from '@/services/Api'
import comment from '../../../server/src/models/comment'

export default {
    index () {
        return Api().get('comments')
    },
    show (blogId) {
        return Api().get('comment/' + commentId)
    },
    post (blog) {
        return Api().post('comment', comment)
    },
    put (blog) {
        return Api().put('comment/' + cooment.id, comment)
    },
    delete (blog) {
        return Api().delete('comment/' + comment.id, comment)
    },
}