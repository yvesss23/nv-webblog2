<template>
    <div>
        <h1>Get all comments</h1>
        <h4> จำนวน comment {{comments.length}}</h4>
        <div v-for="comment in comments" v-bind:key="comment.id">
            <p> id: {{comment.id}}</p>
            <p> blog id: {{comment.blogId}}</p>
            <p> comment: {{comment.comment}}</p>
            <p>
                <button v-on:click="navigateTo('/comment/' + comment.id)">Get comment</button>
                 <button v-on:click="deleteComment(comment)">delete</button>
                </p>
                <hr>
        </div>
    </div>
</template>
<script>
import commentsService from '@/services/CommentsService'

export default {
    data (){
        return{
            comments: []
        }
    },
    async created () {
        this.comments = (await commentsService.index()).data
    },
methods: {
            navigateTo (route){
                this.$router.push(route)
        },
        async deleteComment(comment) {
            let result = confirm("Want to delete?")
                if (result) {
                    try {
                    await commentsService.delete(comment)
                    this.refreshData()
            } catch (err){
            console.log(err)
          }
                }
        },
        async refreshData() {
            this.comments = (await commentsService.index()).data
         },
        
}
}

</script>
<style scoped>

</style>