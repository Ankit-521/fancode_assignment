const mysql = require('../lib/mysql');

const getTourIdbyMatchId = async params => {
    const statement = 'select tourId from matches where matches.id = ?';
    const parameters = [ params.matchId ];
    return await mysql.query(statement, parameters);
}
const getSportIdbyTourId = async params => {
    const statement = 'select sportId from tours where tours.id= ?';
    const parameters = [ params.tourId ];
    return await mysql.query(statement, parameters);
}
const saveNewsbyMatchId = async params => {
    const statement = 'insert into news(title, description, matchId, tourId) values(?,?,?,?)';
    const parameters = [ params.title, params.description, params.matchId, params.tourId ];
    await mysql.query(statement, parameters);
}
const saveNewsbyTourId = async params => {
    const statement = 'insert into news(title, description, tourId, sportId) values(?,?,?,?)';
    const parameters = [ params.title, params.description, params.tourId, params.sportId];
    await mysql.query(statement, parameters);
}
const getNewsByMatchId = async params => {
    const statement = 'select * from news where news.matchId = ?';
    const parameters = [ params.matchId];
    return await mysql.query(statement, parameters);
}
const getNewsByTourId = async params => {
    const statement = 'select * from news where news.tourId = ?';
    const parameters = [ params.tourId];
    return await mysql.query(statement, parameters);
}
const getNewsBySportId = async params => {
    const statement = 'select * from news where news.sportId = ?';
    const parameters = [ params.sportId];
    return await mysql.query(statement, parameters);
}
module.exports = {
    getTourIdbyMatchId: getTourIdbyMatchId,
    getSportIdbyTourId: getSportIdbyTourId,
    saveNewsbyMatchId: saveNewsbyMatchId,
    saveNewsbyTourId:saveNewsbyTourId,
    getNewsByMatchId:getNewsByMatchId,
    getNewsByTourId:getNewsByTourId,
    getNewsBySportId:getNewsBySportId
}