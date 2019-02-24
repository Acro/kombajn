module.exports = function (props) {
    const result = []
    const process = (depth, buffer, item) => {
        if (props[depth+1]) {
            return props[depth+1].map(process.bind(
                null,
                depth+1,
                buffer.concat(item)
            ))
        } else {
            result.push(buffer.concat(item))
        }
    }

    props[0].map(process.bind(null, 0, []))

    return result
}