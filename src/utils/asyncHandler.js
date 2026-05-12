const asyncHandler = (requestHandler) =>{
    (req, res, next) =>{
        Promise.resolve(requestHandler(req, res, next))
        .catch((err)=> next(err)).catch((err) =>next(err))
    }
}

export {asyncHandler}


// code ko likhne ka other type
// const asyncHandler = () =>{}
// const asyncHandler = (func) =>() => {}
// const asyncHandler = (func) => async () =>{}


// const syncHandler = (fn) => async (req, res, mext) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code ||500).json({
//             success:false,
//             message: err.message
//         })
//     }
// }