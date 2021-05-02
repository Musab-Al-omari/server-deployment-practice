function notFound(request, response) {
    // console.log(request);
    response.status(404).json({
        error:404,
        route:request.originalUrl
    })
}

module.exports={
    notFound:notFound
}