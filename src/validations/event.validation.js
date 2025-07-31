const Joi = require("joi");

const createEvent = {
    body: Joi.object().keys({
        title: Joi.string()
            .trim()
            .min(3)
            .max(255)
            .required()
            .messages({
                "any.required": "Event title is required",
                "string.empty": "Event title cannot be empty",
            }),

        location: Joi.string()
            .trim()
            .min(3)
            .max(500)
            .required()
            .messages({
                "any.required": "Event location is required",
                "string.empty": "Event location cannot be empty",
            }),

        eventDate: Joi.date()
            .iso()
            .required()
            .messages({
                "any.required": "Event date is required",
                "date.base": "Event date must be a valid ISO date",
            }),

        eventTime: Joi.string()
            .pattern(/^([0]?[1-9]|1[0-2]):[0-5][0-9]\s?(AM|PM)$/i)
            .required()
            .messages({
                "any.required": "Event time is required",
                "string.pattern.base": "Event time must be in the format HH:MM AM/PM",
            }),

        category: Joi.string()
            .valid(
                "Dining",
                "Entertainment",
                "Activities",
                "Catering",
                "Transportation",
                "Venues",
                "Map"
            )
            .required()
            .messages({
                "any.required": "Primary category is required",
                "any.only": "Primary category must be one of the predefined options",
            }),

        occurrenceType: Joi.string()
            .valid(
                "Romantic",
                "Sex",
                "Fast Date",
                "Fun",
                "Chill",
                "Active",
                "Party",
                "Sophisticated",
                "Outdoors",
                "Intimate"
            )
            .required()
            .messages({
                "any.required": "Subcategory is required",
                "any.only": "Subcategory must be one of the predefined options",
            }),

        occurrenceTime: Joi.string()
            .valid("One-time-Event", "Per-week-event", "Monthly-event", "Yearly-event")
            .required()
            .messages({
                "any.required": "Occurrence type is required",
                "any.only": "Occurrence type must be one of the predefined options",
            }),

        description: Joi.string()
            .max(2000)
            .allow("")
            .messages({
                "string.max": "Description must be under 2000 characters",
            }),
        // File uploads are validated using multer; these just exist for reference 
        image: Joi.string().optional(),     // File path or URL
    }),
};

module.exports = {
    createEvent,
};
