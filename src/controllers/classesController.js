const Class = require("../models/Class");
const pool = require("../models/db");


exports.getClasses = (request, response) => {
    response.send("<h2>Aqui viene vista para Clases</h2>");
};

exports.addClass = (request, response) => {
    response.send("<h2>Aqui viene un formulario</h2>");
};

exports.postClass = (request, response) => {
    const { class_name, descrip } = request.body;
    const newClass = {
        class_name, descrip, owner_user_id: request.user.id
    };
    const aClass = Class.createClass({ newClass });
    aClass.save().then(result => {
        response.redirect('/classes');
        request.flash('success', "Link saved successfully");
    });
    response.send("<h2>Aqui viene vista para Clases</h2>");
};

exports.editClass = (request, response) => {
    const { id } = request.params;
    const user_id = request.user.id;
    pool.query(`SELECT * FROM ${Class.tableName} WHERE ? AND ?`, [
        { code: id }, { owner_user_id: user_id }
    ]).then(classes => {
        if (classes.length > 0) {
            const aClass = classes[0];
            response.send(`<h2>Id de la clase: ${aClass.id}</h2>`)
            //response.render('clases', { aClass })
        } else {
            console.log({ id, user_id });
            response.redirect('/classes');
        }
    });
};

exports.updateClass = (request, response) => {
    const { id } = request.params;
    const { class_name, descrip } = request.body;
    const newClass = {
        class_name, descrip, owner_user_id: request.user.id
    };
    const aClass = Class.createClass({ newClass });
    aClass.code = id;
    aClass.update();
    response.redirect('/classes');
};
exports.deleteClass = (request, response) => {
    const { id } = request.params;
    const user_id = request.user.id;
    Class.delete({ id: id, owner_user_id: user_id });
    response.redirect('/classes');
};
