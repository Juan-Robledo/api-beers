let posts = [
    {
        "id": "1",
        "title": "American Amber Ale",
        "description": "Aromas dulces de maltas caramelos",
        "origen": "Estados Unidos",
        "color": "roja - bordos",
        "alcohol": "4.5% - 6.2%",
        "maridaje": "Pollo, Frutos de mar, Comidas condimentadas"
    }
];

function getPosts(){
    return posts;
}

function getPost(postID){
    let postSelecionado = posts.find((post) => {
        return post.id == postID;
    })
    return postSelecionado;
}

function addPost(post){
    posts.push(post);
}

function editPost(postID, propiedad, valorNuevo){
    posts = posts.filter((post) => {
        if(post.id == postID){
            post[propiedad] = valorNuevo;
        }
        return post;
    })
}

function removePost(postID){
    posts = posts.filter((post) => {
        return post.id != postID;
    })
}


module.exports = {
    getPosts,
    getPost,
    addPost,
    editPost,
    removePost
}