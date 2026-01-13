export const cropCategories = {
    cereals: [
        "Rice",
        "Wheat",
        "Maize",
        "Jowar",
        "Bajra",
        "Ragi",
        "Barley",
        "Small millets",
        "Other Cereals",
    ],

    pulses: [
        "Arhar/Tur",
        "Gram",
        "Masoor",
        "Moong(Green Gram)",
        "Urad",
        "Horse-gram",
        "Cowpea(Lobia)",
        "Peas & beans (Pulses)",
        "Khesari",
        "Other  Rabi pulses",
        "Other Kharif pulses",
        "Other Summer Pulses",
        "Moth",
    ],

    oilseeds: [
        "Groundnut",
        "Sesamum",
        "Rapeseed &Mustard",
        "Soyabean",
        "Sunflower",
        "Safflower",
        "Niger seed",
        "Linseed",
        "Castor seed",
        "other oilseeds",
        "Oilseeds total",
    ],

    cash: ["Cotton(lint)", "Sugarcane", "Tobacco", "Jute", "Mesta", "Sannhamp"],

    spices: [
        "Turmeric",
        "Ginger",
        "Garlic",
        "Coriander",
        "Dry chillies",
        "Black pepper",
        "Cardamom",
    ],

    horticulture: ["Banana", "Potato", "Onion", "Sweet potato", "Tapioca"],

    plantation: ["Coconut ", "Arecanut", "Cashewnut"],
};

export const seasonCompatibility = {
    "Kharif (Monsoon)": [
        "Rice",
        "Maize",
        "Cotton(lint)",
        "Groundnut",
        "Soyabean",
        "Jowar",
        "Bajra",
        "Moong(Green Gram)",
        "Urad",
        "Arhar/Tur",
        "Sesamum",
    ],

    "Rabi (Winter)": [
        "Wheat",
        "Gram",
        "Mustard",
        "Barley",
        "Masoor",
        "Peas & beans (Pulses)",
        "Linseed",
        "Garlic",
        "Onion",
    ],

    Summer: ["Moong(Green Gram)", "Urad", "Sunflower", "Groundnut", "Cowpea(Lobia)"],

    "Whole Year": [
        "Sugarcane",
        "Banana",
        "Coconut ",
        "Arecanut",
        "Cashewnut",
        "Black pepper",
    ],
};

export const combinedReasons = {
    pulses: {
        "Kharif (Monsoon)":
            "These crops are recommended because they fix nitrogen in the soil and grow well under monsoon rainfall conditions.",
        "Rabi (Winter)":
            "These crops are recommended because they improve soil fertility after the previous crop and perform well in cool winter conditions.",
        Summer:
            "These crops are recommended because they require less water, tolerate high temperatures, and help restore soil nutrients during summer.",
        "Whole Year":
            "These crops are recommended because they maintain soil health and can be cultivated throughout the year.",
    },

    oilseeds: {
        "Kharif (Monsoon)":
            "These crops are recommended because they break pest cycles and are suitable for cultivation during the monsoon season.",
        "Rabi (Winter)":
            "These crops are recommended because they have moderate water requirements and fit well into winter cropping systems.",
        Summer: "These crops are recommended because they are drought tolerant and suitable for summer cultivation.",
        "Whole Year":
            "These crops are recommended because they adapt well to different seasons and improve crop diversity.",
    },

    cash: {
        "Kharif (Monsoon)":
            "These crops are recommended to utilize improved soil conditions and provide higher economic returns during the monsoon season.",
        "Rabi (Winter)":
            "These crops are recommended to maximize farm income while efficiently using winter soil moisture.",
        Summer: "These crops are recommended because they can withstand summer conditions and offer good market value.",
        "Whole Year":
            "These crops are recommended because they provide continuous income and are suitable for long-duration cultivation.",
    },

    cereals: {
        "Kharif (Monsoon)":
            "These crops are recommended because they efficiently use monsoon rainfall and fit well in the cereal cropping cycle.",
        "Rabi (Winter)":
            "These crops are recommended because they grow well in cool temperatures and utilize residual soil moisture.",
        Summer: "These crops are recommended because they are short-duration cereals suitable for summer cultivation.",
        "Whole Year":
            "These crops are recommended because they can be grown across multiple seasons with proper management.",
    },
};

export const rotationOrder = ["cereals", "pulses", "oilseeds", "cash"];