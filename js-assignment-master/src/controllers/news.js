const News = require('../models/news');

const saveNews = async params => {
    const { title, description, matchId, tourId } = params;
    if (!matchId && !tourId) {
        throw new Error('Missing required parameter: either matchId or tourId');
    } else if (matchId) {
        let tourIdData = await News.getTourIdbyMatchId(params);
        if (tourIdData.length == 0) {
            throw new Error('Match Id is not found in the records');
        }
        params.tourId = tourIdData[0].tourId;
        await News.saveNewsbyMatchId(params);
    } else {
        let sportIdData = await News.getSportIdbyTourId(params)
        if (sportIdData.length == 0) {
            throw new Error('Tour Id is not found in the records');
        }
        params.sportId = sportIdData[0].sportId;
        await News.saveNewsbyTourId(params);
    }
}
const getNewsByMatchId = async params => {
    const { matchId } = params;
    if (!matchId) {
        throw new Error('Missing required parameter: matchId');
    }
    return await News.getNewsByMatchId(params);
}
const getNewsByTourId = async params => {
    const { tourId } = params;
    if (!tourId) {
        throw new Error('Missing required parameter: tourId');
    }
    return await News.getNewsByTourId(params);
}
const getNewsBySportId = async params => {
    const { sportId } = params;
    if (!sportId) {
        throw new Error('Missing required parameter: sportId');
    }
    return await News.getNewsBySportId(params);
}
module.exports = {
    saveNews: saveNews,
    getNewsByMatchId: getNewsByMatchId,
    getNewsByTourId: getNewsByTourId,
    getNewsBySportId: getNewsBySportId
}