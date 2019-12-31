<script>
    import {Link} from 'svelte-routing';
</script>
<style>
.header{
    display: flex;
    width: 100%;
    padding: 20px 0px;
    justify-content: center;
    background: #c1ffc1;
    color: black;
    font-weight: 600;
    font-size: 50px;
}
</style>
<header>
    <div class="header"><Link to="/">My Blog Site</Link></div>
</header>