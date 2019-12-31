<script>
import {Link} from 'svelte-routing';
let data = {};
fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>res.json()).then((res)=>{
    console.log('json',res);
    data = res;
})
</script>
<style>
    .blog-parent{
        display: flex;
        align-items: flex-start;
        text-align: left;
        padding: 25px;
        border:1px solid grey;
        flex-direction: column;
        margin-bottom: 20px;
    }
    .post-title{
        font-weight:700;
        font-size: 22px;
    }
    .post-body{
        color: grey;
        padding: 10px 0px;
    }
</style>
{#each data as post}
    <div class="blog-parent">
        <div class="post-title"><Link to={`/post/${post.id}`}>{post.title}</Link></div>
        <div class="post-body">{post.body}</div>
    </div>
{/each}

