// @desc    Get all bootcamps
// @router  GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({success: true, message: "Show all bootcamps."})
}

// @desc    Get single bootcamp
// @router  GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({success: true, message: "Get one bootcamp"})
}

// @desc    Create new bootcamps
// @router  POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({success: true, message: "Create a bootcamp"})
}

// @desc    Update bootcamp
// @router  PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({success: true, message: "Update a bootcamp"})
}

// @desc    Delete bootcamp
// @router  DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({success: true, message: "Delete a bootcamp"})
}