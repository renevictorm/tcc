const restful = require('node-restful')
const mongoose = restful.mongoose
//var filePluginLib = require('mongoose-file');
//var filePlugin = filePluginLib.filePlugin;
//var make_upload_to_model = filePluginLib.make_upload_to_model;
//const uploads = 'C:\Users\Unknown\Dropbox\Seminarios\ponto 6\todo-app\frontend\src\arquivos\arqs'



const  arquivoSchema = new mongoose.Schema({

    name: { type: String , required: true },
    file: { type: String, required: true },
    idProjeto:{type:String, required:true}
    
   
})

/*arquivoSchema.plugin(filePlugin, {
    name: "photo",
    upload_to: make_upload_to_model(uploads ),
    relative_to: uploads
});
*/
module.exports = restful.model('Arquivo', arquivoSchema)


 

 


 


