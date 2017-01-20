/************************************************
 * PROJECT:        DardeVille                   *
 * AUTHOR:         Alexandre Cazala             *
 * CREATION_DATE:  27/10/16                      *
 * EMAIL:          alexandre.cazala@gmail.com   *
 * LICENSE:        Apache 2.0                   *
 ***********************************************/
var Schema = {
    dangers: {
        id: {type: 'increments', nullable: false, primary: true},
        latitude: {type: 'decimal', nullable: false},
        longitude: {type: 'decimal', nullable: false},
        created_at: {type: 'dateTime', nullable: false},
        updated_at: {type: 'dateTime', nullable: true},
        name: {type: 'string', maxlength: 150, nullable: false}
    },
    users: {
        id: {type: 'increments', nullable: false, primary: true},
        email: {type: 'string', maxlength: 254, nullable: false, unique: true},
        name: {type: 'string', maxlength: 150, nullable: false},
        role: {type: 'string', maxlength: 150, nullable: false}
    },
    notifications: {
        id: {type: 'increments', nullable: false, primary: true},
        user_id: {type: 'integer', nullable: false, unsigned: true},
        type: {type: 'string', maxlength:254, nullable:false},
        created_at: {type: 'dateTime', nullable: false},
        danger_lvl: {type: 'integer', nullable: false, unsigned: true}
    },
    dangers_notifications: {
        id: {type:'increments', nullable: false, primary: true},
        danger_id: {type:'integer', nullable: false, unsigned: true},
        notification_id: {type: 'integer', nullable: false, unsigned: true}
    },
    positions: {
        id: {type:'increments', nullable: false, primary: true},
        user_id: {type: 'integer', nullable: false, unsigned: true},
        latitude: {type: 'double', nullable: true, unsigned: true},
        longitude: {type: 'double', nullable: true, unsigned: true},
        date: {type: 'dateTime', nullable: false}
    }
};
module.exports = Schema;