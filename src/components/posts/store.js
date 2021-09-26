const Model = require("./model");

// let posts = [
//     {
//         "id": "1",
//         "title": "American Amber Ale",
//         "description": "Aromas dulces de maltas caramelos",
//         "origen": "Estados Unidos",
//         "color": "roja - bordos",
//         "alcohol": "4.5% - 6.2%",
//         "maridaje": "Pollo, Frutos de mar, Comidas condimentadas"
//     }
// ];

async function getPosts(){
    try{
        const res = await Model.find({});
        return res;
    } catch(e){
        console.log(e);
    }
}

async function getPost(postID){
    try{
        const res = await Model.find({ id: postID });
        return res;
    } catch(e){
        console.log(e);
    }
}

async function addPost(post){
    const postNuevo = new Model(post);
    try {
        const res = await postNuevo.save()
        return res;
    } catch{
        console.log(e);
    }
}


async function editPost(postID, propiedad, valorNuevo){
    try{
        let nuevaInfo = {}
        nuevaInfo[propiedad] = valorNuevo;
        const res = await Model.updateOne(
            {
                id: postID
            },
            nuevaInfo
        );
        return res;
    } catch(e){
        console.log(e)
    }
}

async function removePost(postID){
    try{
        const res  = await Model.deleteOne({ id: postID });
        res.deletedCount;
    } catch(e){
        console.log(e);
    }
}


module.exports = {
    getPosts,
    getPost,
    addPost,
    editPost,
    removePost
}