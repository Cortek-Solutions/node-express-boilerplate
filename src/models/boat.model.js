const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');
const { toJSON, paginate } = require('./plugins');

const boatSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    ref: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    permalink: {
      type: String,
      required: false,
      unique: true,
      trim: true,
      lowercase: true
    },
    type: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Customtype',
      required: true,
      autopopulate: false
    },
    year_built: {
      type: String,
      trim: true,
      required: false
    },
    speed_average: {
      type: Number,
      required: false
    },
    speed_max: {
      type: Number,
      required: false
    },
    beam: {
      type: Number,
      required: false
    },
    wide: {
      type: Number,
      required: false
    },
    draft: {
      type: Number,
      required: false
    },
    engines: {
      total: {
        type: Number
      },
      brand: {
        type: String,
        trim: true
      },
      power: {
        type: Number
      }
    },
    generators: {
      type: Number,
      required: false
    },
    nitrox: {
      type: Boolean
    },
    radio: {
      type: Boolean
    },
    gps: {
      type: Boolean
    },
    satellite_phone: {
      type: Boolean
    },
    life_rafts: {
      type: Number,
      required: false
    },
    life_jackets: {
      type: Number,
      required: false
    },
    dinghies: {
      type: Number,
      required: false
    },
    fire_extinguishers: {
      type: Number,
      required: false
    },
    smoke_detectors: {
      type: Number,
      required: false
    },
    fire_exits: {
      type: Number,
      required: false
    },
    max_guests: {
      type: Number,
      required: true
    },
    max_crew: {
      type: Number,
      required: true
    },
    min_crew: {
      type: Number,
      required: true
    },

    decks: [
      {
        ref: {
          type: String
        },
        name: {
          type: String,
          trim: true
        },
        amenities: [
          {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Customtype',
            required: false
          }
        ],
        public: {
          type: Boolean,
          default: true
        },
        description: {
          type: String,
          trim: true
        },
        images: [
          {
            filename: {
              type: String,
              trim: true
            },
            filepath: {
              type: String,
              trim: true
            },
            fullpath: {
              type: String,
              trim: true
            },
            ext: {
              type: String,
              trim: true
            },
            size: {
              type: Number
            },
            type: {
              type: String
            },
            etag: {
              type: String,
              trim: true
            },
            lastModified: {
              type: String
            }
          }
        ],
        order: {
          type: Number,
          default: 0
        }
      }
    ],

    cabins: [
      {
        name: {
          type: String,
          trim: true
        },
        type: {
          type: mongoose.SchemaTypes.ObjectId,
          ref: 'Customtype',
          required: false
        },
        beds: {
          type: Number
        },
        price: {
          type: Number
        },
        discount: {
          type: Object
        },
        amenities: [
          {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Customtype',
            required: false
          }
        ],
        public: {
          type: Boolean,
          default: true
        },
        active: {
          type: Boolean,
          default: false
        },
        description: {
          type: String,
          trim: true
        },
        thumbnail: {
          type: String,
          trim: true
        },
        images: [
          {
            filename: {
              type: String,
              trim: true
            },
            filepath: {
              type: String,
              trim: true
            },
            fullpath: {
              type: String,
              trim: true
            },
            ext: {
              type: String,
              trim: true
            },
            size: {
              type: Number
            },
            type: {
              type: String
            },
            etag: {
              type: String,
              trim: true
            },
            lastModified: {
              type: String
            }
          }
        ],
        order: {
          type: Number,
          default: 0
        }
      }
    ],
    // crew: [Employee],

    amenities: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Customtype',
        required: false
      }
    ],
    thumbnail: {
      type: String,
      trim: true
    },
    images: [
      {
        filename: {
          type: String,
          trim: true
        },
        filepath: {
          type: String,
          trim: true
        },
        fullpath: {
          type: String,
          trim: true
        },
        ext: {
          type: String,
          trim: true
        },
        size: {
          type: Number
        },
        type: {
          type: String
        },
        etag: {
          type: String,
          trim: true
        },
        lastModified: {
          type: String
        }
      }
    ],
    videos: [
      {
        name: {
          type: String,
          trim: true
        },
        ref: {
          // Ref on a youtube video would be its YouTube REF!
          type: String,
          trim: true
        },
        filename: {
          type: String,
          trim: true
        },
        filepath: {
          type: String,
          trim: true
        },
        fullpath: {
          type: String,
          trim: true
        },
        ext: {
          type: String,
          trim: true
        },
        size: {
          type: Number
        },
        type: {
          type: String
        },
        etag: {
          type: String,
          trim: true
        },
        lastModified: {
          type: String
        }
      }
    ],
    embedded_videos: [
      {
        ref: {
          type: String,
          required: true
        },
        platform: {
          type: String,
          trim: true
        },
        videoId: {
          type: String,
          trim: true
        }
      }
    ],
    rating: {
      type: Number
    },

    description: {
      type: String,
      trim: true
    },

    meta: {
      title: {
        type: String,
        trim: true
      },
      description: {
        type: String,
        trim: true
      },
      keywords: [
        {
          type: String,
          trim: true
        }
      ]
    },

    active: {
      type: Boolean,
      default: false
    },
    notes: String,
    tags: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'tag'
      }
    ],
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'user',
      title: String
    }
  },
  {
    timestamps: true
  }
);

// add plugin that converts mongoose to json
boatSchema.plugin(autopopulate, { functions: ['find', 'findOne', 'findOneAndUpdate'] });
boatSchema.plugin(toJSON);
boatSchema.plugin(paginate);

/**
 * Check if ref is taken
 * @param {string} ref - The boat's ref
 * @param {ObjectId} [excludeBoatId] - The id of the boat to be excluded
 * @returns {Promise<boolean>}
 */
boatSchema.statics.isRefTaken = async function (ref, excludeBoatId) {
  const boat = await this.findOne({ ref, _id: { $ne: excludeBoatId } });
  return !!boat;
};

/**
 * Check if permalink is taken
 * @param {string} ref - The boat permalink
 * @param {ObjectId} [excludeCourseId] - The id of the boat to be excluded
 * @returns {Promise<boolean>}
 */
boatSchema.statics.isPermalinkTaken = async function (permalink, excludeBoatId) {
  const boat = await this.findOne({ permalink, _id: { $ne: excludeBoatId } });
  return !!boat;
};

/**
 * @typedef Boat
 */
const Boat = mongoose.model('Boat', boatSchema);

module.exports = Boat;
