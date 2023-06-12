import conversoModel from '../models/ArticleModel.js';

// Definir métodos para el CRUD 

// Mostrar TODOS los artículos

export const getAllArticles = async (req, res) => {
    try {
        const blogs = await conversoModel.find()
        res.status(200).json(blogs)
    } catch (error) {
        res.json( {message: error.message})
    }

}

// Mostrar UN artículo

export const getArticle = async (req, res) => {
        try {
            const id = req.params.id
            const blog = await conversoModel.findById({_id:id}).then( (blog)=>{
                res.status(200).json(blog)
            })
            } catch (error) {
            res.json( {message: error.message})  
        }
}
// Crear un artículo

export const createArticle = async (req, res) => {
    try {
        await conversoModel.create(req.body)
        res.status(200).json({
            "message":"Artículo creado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} ) 
        
    }

}

// Actualizar un artículo
export const updateArticle = async (req, res) => {
    try {
        const id = req.params.id
        await conversoModel.updateOne({_id:id}, req.body).then( res=> {
            console.log(res)
        })
        res.status(200).json({
            "message":"Artículo actualizado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} ) 
    }

}
// Eliminar un artículo
export const deleteArticle = async (req, res) => {
    try {
        const id = req.params.id
        await conversoModel.deleteOne({_id:id }).then( res=>{
            console.log(res)
        })
        res.status(200).json({
            "message":"Artículo eliminado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} ) 
    }
    
}